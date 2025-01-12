import { Component, inject } from '@angular/core';
import { userDataList } from '@entities/constants/user.constants';
import { UserData } from '@entities/interfaces/user.interface';
import { PaginationService } from './services/pagination.service';
import { CommonModule } from '@angular/common';
import { Pagination } from '@entities/interfaces/pagination.interface';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  public paginationService = inject(PaginationService);

  public data: UserData[] = userDataList;

  public pagination: Pagination<UserData> = {
    currentPage: 1,
    itemsPerPage: 10,
    isDataEmpty: this.data.length === 0,
    paginatedData: []
  };

  public ngOnInit(): void {
    this.updatePaginatedUsers();
  }

  public updatePaginatedUsers(): void {
    this.pagination.paginatedData = this.paginationService.getPaginatedData(this.data, this.pagination);
  }

  public nextPage(): void {
    if (this.paginationService.hasNextPage(this.data.length, this.pagination)) {
      this.pagination.currentPage += 1;
      this.updatePaginatedUsers();
    }
  }

  public prevPage(): void {
    if (this.paginationService.hasPreviousPage(this.pagination)) {
      this.pagination.currentPage -= 1;
      this.updatePaginatedUsers();
    }
  }

  public goToFirstPage(): void {
    this.pagination.currentPage = 1;
    this.updatePaginatedUsers();
  }

  public goToLastPage(): void {
    this.pagination.currentPage = this.paginationService.getTotalPages(this.data.length, this.pagination);
    this.updatePaginatedUsers();
  }

}
