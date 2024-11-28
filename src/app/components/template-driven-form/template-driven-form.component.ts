import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Actor } from '@core/models/actor.model';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting']; // Habilidades disponibles
  model = new Actor(18, '', '', ''); // Modelo inicial vacío
  submitted = false;

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted = true;
    } else {
      this.markAllAsTouched(form);
    }
  }

  // Restablecer formulario
  resetForm(form: any) {
    form.resetForm();
    this.submitted = false;
    this.model = new Actor(18, '', '', '');
  }

  // Marcar todos los controles como tocados
  private markAllAsTouched(form: any) {
    Object.values(form.controls).forEach((control: any) => {
      control.markAsTouched();
    });
  }
}
