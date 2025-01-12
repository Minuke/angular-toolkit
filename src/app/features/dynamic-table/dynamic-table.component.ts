import { CommonModule } from '@angular/common';
import { Component, computed, input, output, signal } from '@angular/core';
import { TableColumn, TableConfig } from '@entities/interfaces/dynamic-table';


@Component({
  selector: 'app-dynamic-table',
  imports: [CommonModule],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent<T extends Record<string, any>> {

  public tableConfig = input.required<TableConfig<T>>();
  public rowClick = output<T>();
  public cellClick = output<{ row: T; cell: { field: string; value: T } }>();

  public sortedData = signal<T[]>([]);

  ngOnInit() {
    // Inicializar con los datos originales
    this.sortedData.set(this.tableConfig().data);
  }

  public onSort(column: TableColumn): void {
    const currentDirection = column.sortDirection || 'none';
    const nextDirection = currentDirection === 'none' ? 'asc' 
                        : currentDirection === 'asc' ? 'desc' 
                        : 'none';
  
    column.sortDirection = nextDirection;
  
    let dataToSort = [...this.tableConfig().data];
    
    if (nextDirection !== 'none') {
      dataToSort.sort((a, b) => {
        const aValue = a[column.field];
        const bValue = b[column.field];
        return nextDirection === 'asc'
          ? aValue > bValue ? 1 : -1
          : aValue < bValue ? 1 : -1;
      });
    }
  
    // Actualizar el `WritableSignal` local
    this.sortedData.set(dataToSort);
  }


    /**
   * Computes the CSS grid template columns string.
   * This is derived from the `width` property of each column in the `tableColumns` input.
   */  
    public gridTemplateColumns = computed(() => 
      this.tableConfig().columns.map(col => col["width"]).join(' ')
    );

    /**
   * Handles the click event on a table row.
   * If the table configuration allows row linking, it emits the clicked row data.
   *
   * @template T - The type of the data in the table row.
   * @param {TableData<T>} row - The data of the clicked table row.
   */
  public onRowClick(row: T): void {
    if (this.tableConfig().rowLinkable) {
      this.rowClick.emit(row);
    }
  }

  /**
   * Handles the click event on a table cell.
   * If the table configuration does not allow row linking and the cell is linkable,
   * it emits the clicked cell data along with the row data.
   *
   * @template T - The type of the data in the table row.
   * @param {TableData<T>} row - The data of the table row containing the clicked cell.
   * @param {string} field - The field name of the clicked cell.
   * @param {boolean} isLinkable - Indicates whether the clicked cell is linkable.
   */
  public onCellClick(row: T, field: string, isLinkable: boolean): void {
    if (!this.tableConfig().rowLinkable) {
      if (isLinkable) {
        const value = row[field];
        this.cellClick.emit({ row, cell: { field, value } });
      }
    }
  }

}
