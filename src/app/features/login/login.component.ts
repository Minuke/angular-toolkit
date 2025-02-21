import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  public loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });

  public getErrorMessage(controlName: string): string | null { 
    const control = this.loginForm.get(controlName); 
    if (control?.hasError('required')) { 
      return 'This field is required'; 
    }
    return null;
  }

  public onSubmit() { 
    if (this.loginForm.valid) { 
      console.log('Form submitted successfully', this.loginForm.value); 
    } else { 
      this.loginForm.markAllAsTouched(); 
      console.error('Form is invalid'); 
    }
  }

}
