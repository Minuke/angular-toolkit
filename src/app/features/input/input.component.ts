import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef, Optional, signal, Injector, Host } from '@angular/core';
import { ControlValueAccessor, FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: 'text' | 'number' | 'date' | 'password' | 'textarea' = 'text';
  @Input() placeholder: string = '';
  @Input() mensajeError: string | null = '';
  @Input() value: any;
  @Input() fondoGris: boolean = true;
  @Input() marginBottom: boolean = false;
  @Input() porcentaje: boolean = false;

  @Output() valueChange = new EventEmitter<any>();
  @Output() inputEvent = new EventEmitter<Event>();
  @Output() focusEvent = new EventEmitter<Event>();
  @Output() blurEvent = new EventEmitter<Event>();

  isDisabled = signal<boolean>(false);
  isInvalid = signal<boolean>(false);
  mostrarMensajeError = signal<string | null>(null);
  esContrasenia = signal<boolean>(false);

  public formControlName:FormControlName | null = null;

  constructor(@Optional() @Host() private injector: Injector) {
  }

  ngAfterViewInit(): void {
    this.formControlName = this.injector.get(FormControlName, null);   
    
    if(this.type === 'password') {
      this.esContrasenia.update(valor => true);
    }
  }

  writeValue(value: any): void {
    if(value === undefined || value === ''){
      value = null;
    }
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any,): void {
    this.onTouched = () => {
      fn();
      this.actualizarValidaciones();
    };
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(inputElement.value);
    this.inputEvent.emit(event);
    this.valueChange.emit(inputElement.value);
  }

  onFocus(event: Event): void {
    this.focusEvent.emit(event);
  }

  onBlur(event: Event): void {
    this.onTouched();
    this.blurEvent.emit(event);
  }

  private actualizarValidaciones = (): void => {
    if (this.formControlName) {
      const errors = this.formControlName.errors;
      const isInvalid = this.formControlName.invalid ?? false;
      this.isInvalid.update(valor => isInvalid);
      if (errors) {
        if (errors['required']) {
          this.mostrarMensajeError.set('Campo obligatorio.');
        } else {
          this.mostrarMensajeError.set(this.mensajeError);
        }
      } else {
        this.mostrarMensajeError.set('');
      }
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  cambiarVisibilidadContrasenia(evento: Event): void {
    evento.preventDefault();
    evento.stopPropagation();
    this.type === 'text' ? this.type = 'password' : this.type = 'text';
  }
}
