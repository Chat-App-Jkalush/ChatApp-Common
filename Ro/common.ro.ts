export namespace CommonRo {
  export namespace UserRo {
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
  }

  export namespace ChatRo {
    export interface ChatRo {
      chatId: string;
      chatName: string;
      description: string;
    }
  }

  export namespace MessageRo {
    export interface MessageResponse {
      sender: string;
      content: string;
      chatId: string;
      createdAt: Date;
    }

    export interface messageInfoResponse {
      sender: string;
      content: string;
      createdAt: Date;
    }
  }

  export namespace ContactRo {
    export interface ContactRo {
      userName: string;
      contactName: string;
    }

    export type GetAllContactsResponse = { contactName: string }[];
  }

  export namespace ChatsUsersRo {
    export interface ChatsUsersRo {
      chatId: string;
      userId: string;
    }
  }

  export namespace DataCookie {
    export interface UserCookieRo {
      userName: string;
      cookie: string;
      latestChatId: string;
      chats?: any[];
    }
  }
}
