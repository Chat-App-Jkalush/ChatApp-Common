export interface Message {
  sender: string;
  content: string;
  chatId: string;
  createdAt?: Date;
}
