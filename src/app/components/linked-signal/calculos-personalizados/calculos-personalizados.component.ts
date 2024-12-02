import { CommonModule } from '@angular/common';
import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-calculos-personalizados',
  imports: [CommonModule],
  templateUrl: './calculos-personalizados.component.html',
  styleUrl: './calculos-personalizados.component.scss'
})
export class CalculosPersonalizadosComponent {
  protected readonly selectedDate = signal(new Date());

  protected computedDay = linkedSignal({
    source: this.selectedDate,
    computation: (source, previous) => {
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      return days[source.getDay()];
    },
  });

  protected setManualDay(day: string): void {
    this.computedDay.set(day);
  }

  protected changeDate(): void {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + 1); // Avanzar un día.
    this.selectedDate.set(newDate);
  }
}
