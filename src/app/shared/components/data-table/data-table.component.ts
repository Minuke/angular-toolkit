import { Component } from '@angular/core';
import { dataTable } from '@entities/constants/data-table.constants';
import { DataTableConfig } from '@entities/interfaces/data-table.interface';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  public config:DataTableConfig = {
    dataTable: dataTable,
  }

}
