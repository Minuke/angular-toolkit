import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {
  dynamicForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    // Inicializa el formulario
    this.dynamicForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]*$/)]],
      phones: this.fb.array([this.createPhoneControl()]),
    });
  }

  // Getter para acceder al FormArray de teléfonos
  get phones(): FormArray {
    return this.dynamicForm.get('phones') as FormArray;
  }

  // Método para crear un control de teléfono con validación
  private createPhoneControl(): FormGroup {
    return this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]], // Validación: 9 dígitos exactos
    });
  }

  // Método para agregar un nuevo número de teléfono
  addPhone(): void {
    this.phones.push(this.createPhoneControl());
  }

  // Método para eliminar un número de teléfono
  removePhone(index: number): void {
    if (this.phones.length > 1) {
      this.phones.removeAt(index);
    }
  }

  // Manejar el envío del formulario
  onSubmit(): void {
    this.submitted = true;
    if (this.dynamicForm.valid) {
      console.log('Form submitted:', this.dynamicForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  // Resetear el formulario
  resetForm(): void {
    this.submitted = false;
    this.dynamicForm.reset();
    while (this.phones.length > 1) {
      this.phones.removeAt(0);
    }
    this.phones.at(0).reset();
  }
}
