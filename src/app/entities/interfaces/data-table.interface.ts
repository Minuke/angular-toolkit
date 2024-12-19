export interface DataTable {
  id: number;
  name: string;
  businessName: string;
  phone: string;
  email: string;
}

export interface DataTableColumn {
  name: string;
  isLink: boolean;
}

export interface DataTableConfig {
  dataTable: DataTable[];
  columns: DataTableColumn[];
  columnsWidth: string[];
  isLinkRow: boolean;
  isLinkColumn: boolean[];
}