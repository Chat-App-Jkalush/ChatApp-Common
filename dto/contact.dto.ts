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
