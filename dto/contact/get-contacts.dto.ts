export interface GetContactsDto {
  userName: string;
  page: number;
  pageSize: number;
  search?: string;
}
