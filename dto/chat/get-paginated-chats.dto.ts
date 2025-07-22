export interface GetPaginatedChatsDto {
  userName: string;
  page: number;
  pageSize: number;
  search?: string;
}
