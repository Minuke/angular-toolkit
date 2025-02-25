import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-text-editor',
  imports: [FormsModule, ToolbarComponent],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent {
  
  public text: string = "";
  public selectedText: string = '';

  public onTypedText(event: any): void {
    this.text = event.target.innerText;
    console.log(this.text)
  }

  public onSelectedText(): void {
    const selection = window.getSelection();
    if (selection) {
      this.selectedText = selection.toString();
      console.log(this.selectedText)
    }
  }
  
}
