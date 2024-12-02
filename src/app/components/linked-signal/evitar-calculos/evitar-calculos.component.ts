import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-evitar-calculos',
  imports: [CommonModule],
  templateUrl: './evitar-calculos.component.html',
  styleUrl: './evitar-calculos.component.scss'
})
export class EvitarCalculosComponent {
  protected readonly tasks = signal([
    { id: 1, name: 'Tarea A', completed: true },
    { id: 2, name: 'Tarea B', completed: false },
    { id: 3, name: 'Tarea C', completed: true },
  ]);

  protected completedTasks = linkedSignal({
    source: this.tasks,
    computation: source => source.filter(task => task.completed),
    equal: (prev, next) => JSON.stringify(prev) === JSON.stringify(next), // Comparar arrays.
  });

  protected changeTasks(): void {
    this.tasks.set([
      { id: 1, name: 'Tarea A', completed: true },
      { id: 2, name: 'Tarea B', completed: true }, // Cambia a completada.
      { id: 3, name: 'Tarea C', completed: true },
    ]);
  }
}
