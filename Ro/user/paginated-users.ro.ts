import { UserResponse } from "./user-response.ro";
export interface PaginatedUsersRo {
  users: UserResponse[];
  total: number;
}
