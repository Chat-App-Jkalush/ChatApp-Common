export interface GetPaginatedUsersDto {
  userName: string;
  page: number;
  pageSize: number;
  search?: string;
}
