import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  public getPaginatedData<T>(data: T[], pagination: { currentPage: number; itemsPerPage: number }): T[] {
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    return data.slice(startIndex, startIndex + pagination.itemsPerPage);
  }

  public getTotalPages(dataLength: number, pagination: { itemsPerPage: number }): number {
    return Math.ceil(dataLength / pagination.itemsPerPage);
  }

  public hasNextPage(dataLength: number, pagination: { currentPage: number; itemsPerPage: number }): boolean {
    return pagination.currentPage < this.getTotalPages(dataLength, pagination);
  }

  public hasPreviousPage(pagination: { currentPage: number }): boolean {
    return pagination.currentPage > 1;
  }

}
