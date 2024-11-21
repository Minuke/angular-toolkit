import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-selector-opciones',
  imports: [CommonModule],
  templateUrl: './selector-opciones.component.html',
  styleUrl: './selector-opciones.component.scss'
})
export class SelectorOpcionesComponent {
  public shippingOptions = signal(['Opción A', 'Opción B', 'Opción C']);
  public selectedOption  = linkedSignal(() => this.shippingOptions()[0]);

  ngOnInit():void {
    console.log(this.selectedOption ()); // Opción A
    this.selectedOption.set(this.shippingOptions()[2]);
    console.log(this.selectedOption ()); // Opción C
    this.shippingOptions.set(['Email', 'Will Call', 'Postal service']); 
    console.log(this.selectedOption ()); // Email
  }
}
