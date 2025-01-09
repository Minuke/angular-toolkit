export interface TableColumn {
  field: string;
  header: string;
  width: string;
  linkable: boolean;
}

export interface TableConfig<T> {
  title: string;
  data: T[];
  columns: TableColumn[];
  rowLinkable: boolean;
}