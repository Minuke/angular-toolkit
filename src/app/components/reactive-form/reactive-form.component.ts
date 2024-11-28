import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  actorForm: FormGroup;
  skills: string[] = ['Acting', 'Singing', 'Dancing'];
  submitted = false;

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario con validaciones
    this.actorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      studio: ['', Validators.required],
      skill: ['', Validators.required],
    }, { validators: this.customGroupValidator });
  }

  ngOnInit(): void {}

  // Método personalizado para validar el formulario completo
  customGroupValidator(group: AbstractControl): ValidationErrors | null {
    const name = group.get('name')?.value;
    const studio = group.get('studio')?.value;

    // Regla: el nombre no puede ser igual al estudio
    return name && studio && name === studio ? { nameStudioConflict: true } : null;
  }

  // Manejo del envío del formulario
  onSubmit(): void {
    this.submitted = true;

    if (this.actorForm.valid) {
      console.log('Form submitted successfully:', this.actorForm.value);
    }
  }

  // Método para resetear el formulario
  resetForm(): void {
    this.actorForm.reset();
    this.submitted = false;
  }

  // Acceso más fácil a los controles del formulario desde la plantilla
  get f() {
    return this.actorForm.controls;
  }
}
