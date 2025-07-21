import { chatType } from "../enums/chat.enum";

export interface CreateChatDto {
  chatName: string;
  description: string;
  participants: string[];
  type: chatType;
}

export interface AddUserToChatDto {
  userName: string;
  chatId: string;
}

export interface LeaveChatDto extends AddUserToChatDto {}

export interface UpdateUserChats {
  userName: string;
  chatId: string;
  chatName: string;
}

export interface DmExitsDto {
  userName1: string;
  userName2: string;
}

export interface DeleteDmDto {
  userName1: string;
  userName2: string;
}
