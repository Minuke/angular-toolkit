import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-built-in-directives',
    imports: [CommonModule, FormsModule],
    templateUrl: './built-in-directives.component.html',
    styleUrl: './built-in-directives.component.scss'
})
export class BuiltInDirectivesComponent {
  choose: string = '';
  color: string = 'green';
  colorear: string = 'color';
  presentacion = {
    color: 'purple',
    'background-color': '#f4f4f9',
    'font-weight': 'bold',
  };
  items = [
    { id: 1, name: 'Elemento 1' },
    { id: 2, name: 'Elemento 2' },
    { id: 3, name: 'Elemento 3' },
  ];

  retornarColor(): string {
    return this.colorear === 'color' ? 'orange' : 'gray';
  }
}
