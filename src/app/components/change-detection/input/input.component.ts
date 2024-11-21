import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';

@Component({
    selector: 'app-input',
    imports: [FormsModule, DisplayComponent],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss'
})
export class InputComponent {
  public text:string = '';

  onTextChange(text:string):void {
    this.text = text;
  }

  renderInput():boolean {
    console.log("Render Input");
    return true;
  }
}
