import { Controller } from "@nestjs/common";
import UserService from "../services/user.service";


@Controller('api/v1/users')

export default class UserController{
    constructor(userService: UserService){}
    
}