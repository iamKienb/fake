import { Controller } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Controller('api/v1/auth')

export default class AuthController{
    constructor(authService: AuthService){}
    
}