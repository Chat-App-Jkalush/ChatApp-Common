import { chatType } from "../enums/chat.enum";

export interface RegisterDto {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface LoginDto {
  userName: string;
  password: string;
}

export interface UserUpdateDto {
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
}
