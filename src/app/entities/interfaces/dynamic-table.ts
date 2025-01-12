export interface TableColumn {
  field: string;
  header: string;
  width: string;
  linkable: boolean;
  sortable?: boolean;
  sortDirection?: 'asc' | 'desc' | 'none';
}

export interface TableConfig<T> {
  title: string;
  data: T[];
  columns: TableColumn[];
  rowLinkable: boolean;
}