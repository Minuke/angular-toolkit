import { Component } from '@angular/core';
import { DynamicButtonComponent } from '../dynamic-button/dynamic-button.component';

@Component({
  selector: 'app-wrapper-button',
  imports: [DynamicButtonComponent],
  templateUrl: './wrapper-button.component.html',
  styleUrl: './wrapper-button.component.scss'
})
export class WrapperButtonComponent {

  public onClick(label: string): void {
    console.log(`El botón "${label}" ha sido clickeado.`);
  }

}
