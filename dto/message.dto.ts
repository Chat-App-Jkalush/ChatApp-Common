export interface Message {
  sender: string;

  content: string;

  chatId: string;

  createdAt?: Date;
}

export interface CreateMessageDto {
  sender: string;

  content: string;

  chatId: string;
}
