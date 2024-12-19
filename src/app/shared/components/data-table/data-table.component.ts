import { Component, EventEmitter, input, OnInit, output, Output } from '@angular/core';
import { DataTable, DataTableConfig } from '@entities/interfaces/data-table.interface';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit {

  public config = input.required<DataTableConfig>();
  public iconClick = output<{ data: any; column: any }>();

  ngOnInit(): void {
      console.log(this.config());
  }

  public getValue(data: DataTable, column: string): string | number {
    return data[column as keyof DataTable] ?? '';
  }

  public calculateColumnSize(): string {
    return this.config().columns.map(column => column.width).join(' ');
  }

  public emitIconClick(data: any, column: any) {
    this.iconClick.emit({ data, column });
  }
}
