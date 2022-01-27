import { IsEmail } from 'class-validator';

export class TodoDto {
  title: string;
  description: string;

  @IsEmail()
  assigneeEmail: string;
  complete: boolean;
}
