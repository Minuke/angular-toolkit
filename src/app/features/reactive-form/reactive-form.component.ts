import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { forbiddenNameValidator } from './validators/forbidden-name.validator';


@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);

  /**
   * Initializes the profile form with validation rules for name, email, password, phone, and address.
   * - Name: required and cannot be 'root', 'superuser', or 'admin'.
   * - Email: required and must be a valid email.
   * - Password: required with a minimum length of 6 characters.
   * - Phone: required and must match a 9-digit pattern.
   * - Address: contains required fields for street and city.
   */
  public profileForm = this.formBuilder.group({
    name: ['', [Validators.required, forbiddenNameValidator(['root', 'superuser', 'admin'])]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{9}')]],
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
    }),
  });

    /**
   * Retrieves the error message for a specific field in the profile form.
   * Returns a message based on the error type: 'required', 'email', 'minlength', 'pattern', or 'forbiddenName'.
   * 
   * @param controlName - The name of the control for which the error message is requested.
   * @returns The corresponding error message or null if there are no errors.
   */
  public getErrorMessage(controlName: string): string | null { 
    const control = this.profileForm.get(controlName); 
    if (control?.hasError('required')) { 
      return 'This field is required'; 
    } else if (control?.hasError('email')) { 
      return 'Invalid email address'; 
    } else if (control?.hasError('minlength')) { 
      return `Must be at least ${control.errors?.['minlength'].requiredLength} characters`; 
    } else if (control?.hasError('pattern')) { 
      return 'Invalid format'; 
    } else if (control?.hasError('forbiddenName')) { 
      return 'This name is not allowed';
    }
    return null;
  }


    /**
   * Submits the form if it is valid.
   * If the form is not valid, it marks all fields as touched to display error messages.
   */
  public onSubmit() { 
    if (this.profileForm.valid) { 
      // Process the form if it's valid
      console.log('Form submitted successfully', this.profileForm.value); 
    } else { 
      // Mark all fields as touched to show error messages
      this.profileForm.markAllAsTouched(); 
      console.error('Form is invalid'); 
    }
  }

}
