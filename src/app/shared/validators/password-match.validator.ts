import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  if (!control.parent) return null; // Evita errores al inicializar el formulario

  const password = control.parent.get('firstPassword')?.value;
  const confirmPassword = control.value;

  if (!confirmPassword) return null; // Si el usuario aún no ha escrito nada, no mostramos error

  return password !== confirmPassword ? { passwordsNotMatch: true } : null;
};
