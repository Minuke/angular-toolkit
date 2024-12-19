export interface DataTable {
  id: number;
  name: string;
  businessName: string;
  phone: string;
  email: string;
}

export interface DataTableConfig {
  dataTable: DataTable[];
}