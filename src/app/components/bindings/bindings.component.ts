import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-bindings',
    imports: [FormsModule],
    templateUrl: './bindings.component.html',
    styleUrl: './bindings.component.scss'
})
export class BindingsComponent {
  title: string = 'Mi Aplicación Angular';
  user: string = 'Juan';

  mostrarMensaje() {
    alert('¡Hola, has hecho clic en el botón!');
  }
}
