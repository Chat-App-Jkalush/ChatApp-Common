import { chatType } from "../enums/chat.enum";

export namespace CommonDto {
  export namespace UserDto {
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
  }

  export namespace ChatDto {
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
  }

  export namespace MessageDto {
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

    export interface GetMessagesDto {
      chatId: string;
      page: number;
      limit: number;
    }
  }

  export namespace ContactDto {
    export interface CreateContactDto {
      userName: string;
      contactName: string;
    }

    export interface RemoveContactDto {
      userName: string;
      contactName: string;
    }

    export interface ContactOnlineStatus {
      userName: string;
      isOnline: boolean;
    }

    export interface GetContactsDto {
      userName: string;
      page: number;
      limit: number;
    }
  }

  export namespace DataCookieDto {
    export interface SaveDataCookieDTO {
      userName: string;
      cookie: string;
    }

    export interface LatestChatIdDTO {
      userName: string;
      latestChatId: string;
    }
  }

  export namespace ChatsUsersDto {
    export interface CreateChatsUsersDto {
      chatId: string;
      userId: string;
    }
  }
}
