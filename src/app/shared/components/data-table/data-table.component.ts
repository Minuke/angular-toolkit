import { Component, input } from '@angular/core';
import { DataTableConfig } from '@entities/interfaces/data-table.interface';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  public config = input.required<DataTableConfig>();

}
