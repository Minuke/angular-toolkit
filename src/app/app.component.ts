import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dataTable } from '@entities/constants/data-table.constants';
import { DataTableConfig } from '@entities/interfaces/data-table.interface';
import { DataTableComponent } from '@shared/components/data-table/data-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public config:DataTableConfig = {
    dataTable: dataTable,
    columns: [
      { name: "id", isLink: true },
      { name: "name", isLink: false },
      { name: "email", isLink: true },
      { name: "phone", isLink: false },
    ],
    columnsWidth: ["1fr", "1fr", "1fr", "1fr"],
    isLinkRow: false,
    isLinkColumn: [true, false, true, false],
  }
  
}
