export namespace CommonConstants {
  export namespace GatewayConstants {
    export const DEFAULT_PORT: number = 3002;

    export const EVENTS = {
      CONNECT: "connect",
      DISCONNECT: "disconnect",
      NEW_MESSAGE: "newMessage",
      REPLY: "reply",
      JOIN_CHAT: "joinChat",
      LEAVE_CHAT: "leaveChat",
      IS_ONLINE: "isOnline",
      IS_ONLINE_RESULT: "isOnlineResult",
      GET_ONLINE_USERS: "getOnlineUsers",
      JOIN_NEW_CHAT: "joinNewChat",
      JOIN_ROOM: "joinRoom",
      CONTACT_ONLINE_STATUS: "contactOnlineStatus",
      JOIN_NEW_CHAT_CONFIRMATION: "joinNewChatConfirmation",
      ONLINE_USERS_LIST: "onlineUsersList",
      ADDED_TO_CHAT: "addedToChat",
    } as const;

    export const SYSTEM: string = "SYSTEM";
    export const CLIENT_ORIGIN: string = "http://localhost:4200";
    export const DEFAULT_PORT_ORIGIN: string = "http://localhost:3002";
  }

  export namespace CookiesConstants {
    export const EXPIRATION_TIME_STRING: string = "7d";
    export const EXPIRATION_TIME_NUMBER: number = 7 * 24 * 60 * 60 * 1000;
  }
}
