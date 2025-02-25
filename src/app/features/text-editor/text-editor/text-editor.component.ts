import { Component, inject, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@Component({
  selector: 'app-text-editor',
  imports: [FormsModule, ToolbarComponent],
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent {

  private renderer = inject(Renderer2);
  
  public text: string = "";
  public selectedText: string = ""
  public activeIcon: string = "";

  public onTypedText(event: any): void {
    const el = event.target as HTMLElement;
    
    // Si el modo bold está activo y el contenido no está ya envuelto en <b>
    if (this.activeIcon === 'bold') {
      // Si el contenido no empieza y termina ya con <b>...</b>
      if (!/^<b>.*<\/b>$/.test(el.innerHTML.trim())) {
        // Envolver el contenido actual en una etiqueta <b>
        el.innerHTML = `<b>${el.innerHTML}</b>`;
        // Opcional: colocar el cursor al final para seguir escribiendo dentro del <b>
        this.placeCaretAtEnd(el);
      }
    }
    
    // Guardamos el HTML completo, con las etiquetas de formato
    this.text = el.innerHTML;
    console.log(this.text);
  }

  private placeCaretAtEnd(el: HTMLElement) {
    el.focus();
    if (typeof window.getSelection !== "undefined" &&
        typeof document.createRange !== "undefined") {
      const range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }
  
  

  public onSelectedText(): void {
    const selection = window.getSelection();
    if (selection) {
      this.selectedText = selection.toString();
      console.log(this.selectedText)
    }
  }

  public onIconSelected(icon: string): void {
    this.activeIcon = icon;
    console.log(this.activeIcon);
  
    if (icon === 'bold') {
      this.applyBold();
    }
    // Aquí podrías agregar otros comandos (italic, underline, etc.)
  }

  private applyBold(): void {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      
      if (range.toString().trim() !== "") {
        // Usando Renderer2 para crear el elemento <b>
        const boldElement = this.renderer.createElement('b');
        this.renderer.addClass(boldElement, 'mi-negrita');
  
        // Extraer el contenido seleccionado
        const extractedContent = range.extractContents();
        this.renderer.appendChild(boldElement, extractedContent);
  
        // Insertar el nuevo elemento en el lugar de la selección
        range.insertNode(boldElement);
  
        // Opcional: actualizar la selección
        selection.removeAllRanges();
        const newRange = document.createRange();
        newRange.selectNodeContents(boldElement);
        selection.addRange(newRange);
      }
    }
  }
  
}
