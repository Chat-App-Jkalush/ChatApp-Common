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
