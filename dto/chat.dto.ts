import { chatType } from "../enums/chat.enum";

export interface CreateChatDto {
  chatName: string;
  participants: string[];
  type: chatType;
}
