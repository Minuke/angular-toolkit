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

  public config: DataTableConfig = {
    dataTable: dataTable,
    columns: [
      { name: "id", isLink: true, width: "1fr", isEditable: true },
      { name: "name", isLink: false, width: "1fr", isEditable: true },
      { name: "email", isLink: true, width: "1fr", isEditable: true },
      { name: "phone", isLink: false, width: "1fr", isEditable: true },
    ],
    isLinkRow: false,
  };
  
  
}
