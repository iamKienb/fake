import { IsString, IsNotEmpty, MinLength, MaxLength, IsPhoneNumber, IsOptional, IsPostalCode, Matches, IsEnum } from 'class-validator';
import { AddressType } from 'src/core/domains/types/enum/address.enum';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty({ message: 'Receiver name cannot be empty' })
  @MinLength(3, { message: 'Receiver name must be at least 3 characters long' })
  receiveName: string;

  @IsString()
  @IsNotEmpty({ message: 'Phone number cannot be empty' })
  @IsPhoneNumber('VN', { message: 'Invalid phone number' })
  phoneNumber: string;

  @IsString()
  @IsNotEmpty({ message: 'City cannot be empty' })
  @MinLength(2, { message: 'City name must be at least 2 characters long' })
  city: string;

  @IsString()
  @IsNotEmpty({ message: 'District cannot be empty' })
  @MinLength(2, { message: 'District name must be at least 2 characters long' })
  district: string;

  @IsString()
  @IsNotEmpty({ message: 'Ward cannot be empty' })
  @MinLength(2, { message: 'Ward name must be at least 2 characters long' })
  ward: string;

  @IsString()
  @IsNotEmpty({ message: 'Address cannot be empty' })
  @MinLength(5, { message: 'Address must be at least 10 characters long' })
  address: string;
 
  @IsEnum(AddressType, { message: 'Address type must be "home" or "business"' })
  addressType: AddressType;

}
