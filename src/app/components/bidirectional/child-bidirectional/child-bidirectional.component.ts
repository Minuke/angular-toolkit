import { Component, model, ModelSignal } from '@angular/core';

@Component({
  selector: 'app-child-bidirectional',
  standalone: true,
  imports: [],
  templateUrl: './child-bidirectional.component.html',
  styleUrl: './child-bidirectional.component.scss'
})
export class ChildBidirectionalComponent {
  public value: ModelSignal<number> = model(0); // Vinculación bidireccional

  increment(): void {
    this.value.update((value) => value + 1); // Incrementa el valor
  }
}
