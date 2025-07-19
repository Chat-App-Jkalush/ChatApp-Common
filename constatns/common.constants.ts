export namespace CommonConstants {
  export namespace GatewayConstants {
    export const DEFAULT_PORT: number = 3002;

    export const EVENTS = {
      NEW_MESSAGE: "newMessage",
      REPLY: "reply",
      JOIN_CHAT: "joinChat",
      LEAVE_CHAT: "leaveChat",
      IS_ONLINE: "isOnline",
      GET_ONLINE_USERS: "getOnlineUsers",
    } as const;

    export const SYSTEM: string = "SYSTEM";
    export const CLIENT_ORIGIN: string = "http://localhost:4200";
    export const DEFAULT_PORT_ORIGIN: string = "http://localhost:3002";
  }

  export namespace CookiesConstants {
    export const EXPERATION_TIME_STRING: string = "7d";
    export const EXPERATION_TIME_NUMBER: number = 7 * 24 * 60 * 60 * 1000;
  }
}
