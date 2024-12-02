
import { IsEmail, IsEmpty, IsNotEmpty, isNotEmpty, Min } from "class-validator";

export class CreateUserDto {
  @Min(20)
  @IsNotEmpty()
  username = String;

  @IsEmail()
  email = String;
  
  @IsEmpty()
  image = String;

  @Min(8)
  @IsNotEmpty()
  password = String;

  @IsNotEmpty()
  confirmPassword = String;
  
}
