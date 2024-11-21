import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-preservar-opcion',
  imports: [CommonModule],
  templateUrl: './preservar-opcion.component.html',
  styleUrl: './preservar-opcion.component.scss'
})
export class PreservarOpcionComponent {
    // Opciones de envío iniciales
    shippingOptions = signal([
      { id: 1, name: 'Envío Estándar' },
      { id: 2, name: 'Envío Exprés' },
      { id: 3, name: 'Envío Prioritario' },
    ]);

    // Mantener seleccionada una opción válida
    selectedOption = linkedSignal({
      source: this.shippingOptions,
      computation: (newOptions, previous:any) =>
        newOptions.find(opt => opt.id === previous?.value.id) ?? newOptions[0],
    });

    // Cambiar la opción seleccionada
    changeShipping(newOptionId: number) {
      const newOption = this.shippingOptions().find(opt => opt.id === newOptionId);
      if (newOption) {
        this.selectedOption.set(newOption);
      }
    }
}
