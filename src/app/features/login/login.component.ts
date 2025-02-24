import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public showPassword = false;
  
  public togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.showPassword = !this.showPassword;
  }

  public loginForm = this.formBuilder.group({
      userIdentifier: ['', Validators.required],
      password: ['', Validators.required],
  });

  public getErrorMessage(controlName: string): string | null { 
    const control = this.loginForm.get(controlName); 
    if (control?.hasError('required')) { 
      return 'This field is required'; 
    } else if (control?.hasError('pattern')) {
      return 'Must be a valid username or email';
    }
    return null;
  }

  public onSubmit() { 
    if (this.loginForm.valid) { 
      const { userIdentifier, password } = this.loginForm.value;
      const payload = this.isEmail(userIdentifier!)
        ? { email: userIdentifier, password }
        : { username: userIdentifier, password };
      console.log('Form submitted successfully', payload); 
    } else { 
      this.loginForm.markAllAsTouched(); 
      console.error('Form is invalid'); 
    }
  }

  public isEmail(input: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  }

}