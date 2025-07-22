export interface PaginatedChatsRo {
  chats: Array<{
    chatId: string;
    chatName: string;
    type: string;
    description: string;
  }>;
  total: number;
}
