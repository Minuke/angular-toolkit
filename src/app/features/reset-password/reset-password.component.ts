import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public resetPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  public getErrorMessage(controlName: string): string | null { 
    const control = this.resetPasswordForm.get(controlName); 
    if (control?.hasError('required')) { 
      return 'This field is required'; 
    } else if (control?.hasError('email')) {
      return 'Must be a valid email';
    }
    return null;
  }

  public onSubmit() { 
    if (this.resetPasswordForm.valid) { 
      console.log('Form submitted successfully', this.resetPasswordForm.value); 
    } else { 
      this.resetPasswordForm.markAllAsTouched(); 
      console.error('Form is invalid'); 
    }
  }

}
