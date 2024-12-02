import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

interface Tarea {
  id: number;
  descripcion: string;
  completada: boolean;
}

@Component({
  selector: 'app-let',
  imports: [CommonModule],
  templateUrl: './let.component.html',
  styleUrl: './let.component.scss'
})
export class LetComponent {
  // Simulamos un usuario con un observable de tareas
  tareasUsuario$ = new BehaviorSubject<Tarea[]>([
    { id: 1, descripcion: 'Comprar pan', completada: false },
    { id: 2, descripcion: 'Leer un libro', completada: true },
    { id: 3, descripcion: 'Ir al gimnasio', completada: false }
  ]);

  completarTarea(id: number) {
    const tareasActualizadas = this.tareasUsuario$.value.map(tarea =>
      tarea.id === id ? { ...tarea, completada: true } : tarea
    );
    this.tareasUsuario$.next(tareasActualizadas);
  }
}
