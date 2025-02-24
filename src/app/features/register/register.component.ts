import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


    private readonly formBuilder: FormBuilder = inject(FormBuilder);
  
    public registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
    });

    public getErrorMessage(controlName: string): string | null { 
      const control = this.registerForm.get(controlName); 
      if (control?.hasError('required')) { 
        return 'This field is required'; 
      } else if(control?.hasError('email')) {
        return 'Must be a valid email';
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
