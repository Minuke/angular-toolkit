import { Component, input, OnInit } from '@angular/core';
import { DataTable, DataTableConfig } from '@entities/interfaces/data-table.interface';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {

  public config = input.required<DataTableConfig>();

  ngOnInit(): void {
      console.log(this.config());
  }

  public getValue(data: DataTable, column: string): string | number {
    return data[column as keyof DataTable] ?? '';
  }

  public calculateColumnSize(): string {
    return this.config().columns.map(column => column.width).join(' ');
  }
}
