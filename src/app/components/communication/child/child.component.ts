import { Component, input, Input, output, Output, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

    // Signal Input: Recibe datos del padre
    public mensaje = input.required<string>();

    // Signal Output: Enviar datos al padre
    public respuesta = output<string>();

    enviarRespuesta() {
      this.respuesta.emit('Hola, Padre! Respuesta desde el Hijo.');
    }
    
}
