import { Component, DestroyRef, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  public inputTextButton: string = '';
  public inputTextDebounce: string = '';
  private subjectDebounce: Subject<string> = new Subject<string>();

  public destroyRef = inject(DestroyRef);
  
  public printTextButton(): void { 
    console.log(this.inputTextButton);
  }

  ngOnInit(): void {
    this.subjectDebounce
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(2000),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        console.log(text);
      });
  }

  printTextDebounce(value: string): void {
    this.subjectDebounce.next(value);
  }






}
