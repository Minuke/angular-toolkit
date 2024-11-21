import { Component, signal, WritableSignal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

    // Señal para el mensaje enviado al hijo
    public mensajeParaHijo: WritableSignal<string> = signal('Hola desde el Padre!');

    // Señal para el mensaje recibido del hijo
    public mensajeDesdeHijo: WritableSignal<string> = signal('');

    enviarNuevoMensaje() {
      this.mensajeParaHijo.set('Mensaje actualizado desde el Padre!');
    }

    manejarRespuesta(respuesta: string) {
      this.mensajeDesdeHijo.set(respuesta);
    }
    
}
