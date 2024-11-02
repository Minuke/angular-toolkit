import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './host-listener.component.html',
  styleUrl: './host-listener.component.scss'
})
export class HostListenerComponent {
  enterCount = 0;
  clickCount = 0;
  dblClickCount = 0;
  mouseX = 0;
  mouseY = 0;
  scrollCount = 0;
  focusMessage = '';
  blurMessage = '';

  handleEnterKey(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    this.enterCount++;
  }

  handleClick(event: MouseEvent) {
    this.clickCount++;
  }

  handleDblClick(event: MouseEvent) {
    this.dblClickCount++;
  }

  handleMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  handleScroll(event: Event) {
    this.scrollCount++;
  }

  handleFocus() {
    this.focusMessage = 'El input tiene el foco!';
  }

  handleBlur() {
    this.blurMessage = 'El input ha perdido el foco!';
  }

  resetEnter() {
    this.enterCount = 0;
  }

  resetClick() {
    this.clickCount = 0;
  }

  resetDblClick() {
    this.dblClickCount = 0;
  }
}
