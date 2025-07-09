import { IsNotEmpty, IsString } from "class-validator";

interface Message {
  sender: string;
  content: string;
  chatId: string;
}

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  sender: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  chatId: string;
}
