import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(forbiddenNames: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = forbiddenNames.some(name => control.value?.toLowerCase().includes(name.toLowerCase()));
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
