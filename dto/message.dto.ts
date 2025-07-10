export interface Message {
  sender: string;

  content: string;

  chatId: string;
}

export interface CreateMessageDto {
  sender: string;

  content: string;

  chatId: string;
}
