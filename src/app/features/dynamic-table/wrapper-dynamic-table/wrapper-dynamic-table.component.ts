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
      { field: "name", header: "Name", width: "1fr", linkable: false },
      { field: "businessName", header: "Business Name", width: "1fr", linkable: false },
      { field: "phone", header: "Phone", width: "1fr", linkable: false },
      { field: "email", header: "Email", width: "1fr", linkable: false },
    ],
    rowLinkable: true
  });

  // PRODUCT DATA ====================================
  public productTableConfig: WritableSignal<TableConfig<ProductData>> = signal({
    title: "Product Data",
    data: productDataList,
    columns: [
      { field: "id", header: "ID", width: "1fr", linkable: false },
      { field: "name", header: "Name", width: "1fr", linkable: true },
      { field: "category", header: "Category", width: "1fr",linkable: false },
      { field: "price", header: "Price", width: "1fr", linkable: true },
      { field: "stock", header: "Stock", width: "1fr", linkable: false },
    ],
    rowLinkable: false
  });


}
