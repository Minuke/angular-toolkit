import { Component, inject } from '@angular/core';
import { userDataList } from '@entities/constants/user.constants';
import { UserData } from '@entities/interfaces/user.interface';
import { PaginationService } from './services/pagination.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  public paginationService = inject(PaginationService);

  public data: UserData[] = userDataList;

  get paginatedUsers() {
    return this.paginationService.getPaginatedData(this.data);
  }

  get isDataEmpty(): boolean {
    return this.data.length === 0;
  }

  nextPage() {
    if (this.paginationService.hasNextPage(this.data.length)) {
      this.paginationService.setPage(this.paginationService.getPage() + 1);
    }
  }

  prevPage() {
    if (this.paginationService.hasPreviousPage()) {
      this.paginationService.setPage(this.paginationService.getPage() - 1);
    }
  }

  goToFirstPage(): void {
    this.paginationService.goToPage(1);
  }

  goToLastPage(): void {
    this.paginationService.goToPage(this.paginationService.getTotalPages(this.data.length));
  }

}
