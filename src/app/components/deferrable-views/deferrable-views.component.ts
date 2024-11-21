import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LargeComponent } from './large/large.component';

@Component({
    selector: 'app-deferrable-views',
    imports: [CommonModule, LargeComponent],
    templateUrl: './deferrable-views.component.html',
    styleUrl: './deferrable-views.component.scss'
})
export class DeferrableViewsComponent {
  loadLargeComponent = false;
}
