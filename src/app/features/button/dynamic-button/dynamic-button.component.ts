import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  imports: [CommonModule],
  templateUrl: './dynamic-button.component.html',
  styleUrl: './dynamic-button.component.scss'
})
export class DynamicButtonComponent {

  public label: InputSignal<string> = input.required<string>();
  public labelClass: InputSignal<string> = input<string>("");
  public class: InputSignal<string> = input.required<string>();
  public type: InputSignal<'button' | 'submit' | 'reset'> = input.required<'button' | 'submit' | 'reset'>();
  public disabled: InputSignal<boolean> = input.required<boolean>();
  public border: InputSignal<string> = input<string>("");
  public borderRadius: InputSignal<string> = input<string>("");
  public size: InputSignal<string> = input<string>("");
  public fixedWidth: InputSignal<boolean> = input<boolean>(false);
  public hasIcon: InputSignal<boolean> = input<boolean>(false);
  public icon: InputSignal<string> = input<string>("");
  public iconWidth: InputSignal<string> = input<string>("");
  public iconPosition: InputSignal<'left' | 'right'> = input<'left' | 'right'>('left');

  public onClick: OutputEmitterRef<void> = output<void>();

}
