import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '@shared/validators/password-match.validator';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private renderer: Renderer2 = inject(Renderer2);


  public showFirstPassword = false;
  public showSecondPassword = false;
  public isPasswordVisibleChange = false;  // Bandera para controlar la validación
  
  public togglePasswordVisibility(orden: string, evento: Event): void {
    evento.stopPropagation(); // Evitar la propagación del evento
    if(orden === 'first'){
      this.showFirstPassword = !this.showFirstPassword;
    }
    if(orden === 'second'){ 
      this.showSecondPassword = !this.showSecondPassword;
  }
  this.isPasswordVisibleChange = true;
   // Aseguramos que el foco no se pierda
   setTimeout(() => {
    const input = document.getElementById(orden === 'first' ? 'firstPassword' : 'secondPassword');
    if (input) {
      this.renderer.selectRootElement(input).focus();  // Volver a enfocar el input
    }
  }, 0);  // Se ejecuta después de que Angular haya terminado de procesar el ciclo
}

  public registerForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    firstPassword: ['', Validators.required],
    secondPassword: ['', [Validators.required, passwordMatchValidator]],
  });
  
  public getErrorMessage(controlName: string): string | null { 
    const control = this.registerForm.get(controlName); 
    if (control?.hasError('required')) { 
      return 'This field is required'; 
    } else if (control?.hasError('email')) {
      return 'Must be a valid email';
    } else if (controlName === 'secondPassword' && control?.hasError('passwordsNotMatch')) {
      return 'Passwords do not match';
    }
    return null;
  }
  

  public onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted successfully', this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}
