export interface Pagination<T> {
  currentPage: number;
  itemsPerPage: number;
  isDataEmpty: boolean;
  paginatedData: T[];
}
