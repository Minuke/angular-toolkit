import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {
  // Variables para los ejemplos
  texto = 'hello world';
  textoMayus = 'HELLO';
  textoMin = 'hello';
  today = new Date();
  number = 1234.56;
  porcentaje = 0.25;
  obj = { name: 'John', age: 30 };
  promise = new Promise<string>((resolve) => setTimeout(() => resolve('Valor de la Promesa'), 2000));
  messages = ['Mensaje1', 'Mensaje2', 'Mensaje3', 'Mensaje4', 'Mensaje5'];
  mapping = { '=0': 'No hay mensajes', '=1': 'Un mensaje', 'other': '# mensajes' };
  gender = 'male';
  genderMap = { 'male': 'él', 'female': 'ella', 'other': 'ellos' };
}
