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

}
