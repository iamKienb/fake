import { IsNotEmpty } from "class-validator";

export class Address {

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    city: string;

    
    phone: string;


}