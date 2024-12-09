import { IsEmail, IsEmpty, IsNotEmpty, isNotEmpty, IsPhoneNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class EditUserDto {

  @IsNotEmpty({ message: 'Username cannot be empty' })
  @MinLength(3, { message: 'Username must be at least 3 characters long' })
  username: string;

  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Full name cannot be empty' })
  @MinLength(3, { message: 'Full name must be at least 3 characters long' })
  fullname: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  @IsPhoneNumber('VN', { message: 'Invalid phone number' })
  phoneNumber: string;

  @IsEmpty()
  profileImage: String;

  @Min(8, { message: 'Password must be at least 8 characters long' })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;
  
}
