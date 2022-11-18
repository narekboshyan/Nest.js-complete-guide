import { IsNotEmpty } from "class-validator";
export class CreateTaskToDo {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
