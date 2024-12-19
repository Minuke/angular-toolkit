export interface DataTable {
  id: number;
  name: string;
  businessName: string;
  phone: string;
  email: string;
}

export interface DataTableConfig {
  dataTable: DataTable[];
  columns: string[];
  columnsWidth: string[];
  isLinkRow: boolean;
}