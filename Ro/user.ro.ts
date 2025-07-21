export interface User {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface UserResponse {
  userName: string;
  firstName: string;
  lastName: string;
}

export interface PaginatedContacts {
  contacts: string[];
  total: number;
}
