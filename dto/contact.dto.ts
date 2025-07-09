import { IsNotEmpty, IsString } from "class-validator";

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  userName: string;

  @IsNotEmpty()
  @IsString()
  contactName: string;
}
