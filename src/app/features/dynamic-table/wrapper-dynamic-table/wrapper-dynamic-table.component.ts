import { Component, signal, WritableSignal } from '@angular/core';
import { DynamicTableComponent } from '../dynamic-table.component';
import { personDataList } from '@entities/constants/person.constants';
import { productDataList } from '@entities/constants/product.constants';
import { TableConfig } from '@entities/interfaces/dynamic-table';
import { PersonData } from '@entities/interfaces/person.interface';
import { ProductData } from '@entities/interfaces/product.interface';



@Component({
  selector: 'app-wrapper-dynamic-table',
  imports: [DynamicTableComponent],
  templateUrl: './wrapper-dynamic-table.component.html',
  styleUrl: './wrapper-dynamic-table.component.scss'
})
export class WrapperDynamicTableComponent {

  // PERSON DATA ====================================
  public personTableConfig: WritableSignal<TableConfig<PersonData>> = signal({
    title: "Person Data",
    data: personDataList,
    columns: [
      { field: "id", header: "ID", width: "1fr", linkable: false },
      { field: "name", header: "Name", width: "1fr", linkable: true },
      { field: "businessName", header: "Business Name", width: "1fr", linkable: false },
      { field: "phone", header: "Phone", width: "1fr", linkable: true },
      { field: "email", header: "Email", width: "1fr", linkable: false },
    ],
    rowLinkable: false
  });

  public onPersonRowClick(row: PersonData): void {
    console.log('Row clicked in container:', row);
  }

  public onPersonCellClick<T>(event: { row: PersonData, cell: { field: string, value: T } }): void {
    const field = event.cell.field;
    const value = event.cell.value;
    console.log(`Field: ${String(field)}, Value: ${value}`);
    console.log('Cell clicked in container:', event);
  }

  // PRODUCT DATA ====================================
  public productTableConfig: WritableSignal<TableConfig<ProductData>> = signal({
    title: "Product Data",
    data: productDataList,
    columns: [
      { field: "id", header: "ID", width: "1fr", linkable: false },
      { field: "name", header: "Name", width: "1fr", linkable: false },
      { field: "category", header: "Category", width: "1fr",linkable: false },
      { field: "price", header: "Price", width: "1fr", linkable: false },
      { field: "stock", header: "Stock", width: "1fr", linkable: false },
    ],
    rowLinkable: true
  });

  public onProductRowClick(row: ProductData): void {
    console.log('Row clicked in container:', row);
  }

  public onProductCellClick<T>(event: { row: ProductData, cell: { field: string, value: T } }): void {
    const field = event.cell.field;
    const value = event.cell.value;
    console.log(`Field: ${String(field)}, Value: ${value}`);
    console.log('Cell clicked in container:', event);
  }

}
