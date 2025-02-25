import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [CommonModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  
  public activeIcon: string = '';

  @Output() iconSelected: EventEmitter<string> = new EventEmitter<string>();

  public setActive(icon: string, event: MouseEvent): void {
    event.preventDefault(); // Previene que el botón reciba el foco
    this.activeIcon = icon;
    this.iconSelected.emit(this.activeIcon);
  }
  
  
  
}
