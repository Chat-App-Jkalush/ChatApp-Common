import { chatType } from "../../enums/chat.enum";
export interface CreateChatDto {
  chatName: string;
  description: string;
  participants: string[];
  type: chatType;
}
