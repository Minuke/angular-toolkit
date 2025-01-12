import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  private currentPage = 1;
  private itemsPerPage = 3;

  

  setPage(page: number): void {
    if (page > 0) {
      this.currentPage = page;
    }
  }

  getPage(): number {
    return this.currentPage;
  }

  setItemsPerPage(count: number): void {
    if (count > 0) {
      this.itemsPerPage = count;
    }
  }

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }

  getPaginatedData<T>(data: T[]): T[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return data.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getTotalPages(dataLength: number): number {
    return Math.ceil(dataLength / this.itemsPerPage);
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }


  hasNextPage(dataLength: number): boolean {
    return this.currentPage < this.getTotalPages(dataLength);
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }
}
