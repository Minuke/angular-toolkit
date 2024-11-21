import { Component } from '@angular/core';
import { ChildBidirectionalComponent } from '../child-bidirectional/child-bidirectional.component';

@Component({
  selector: 'app-parent-bidirectional',
  standalone: true,
  imports: [ChildBidirectionalComponent],
  templateUrl: './parent-bidirectional.component.html',
  styleUrl: './parent-bidirectional.component.scss'
})
export class ParentBidirectionalComponent {
  valueFromParent = 100; // Valor inicial compartido
}
