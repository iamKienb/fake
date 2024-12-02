import { Module } from "@nestjs/common";
import { AuthController } from "src/auth/auth.controller";
import UserController from "./controllers/user.controller";
import { AuthService } from "src/auth/auth.service";
import UserService from "./services/user.service";

@Module({
    controllers: [AuthController, UserController],
    providers: [AuthService, UserService]
})
export class UsersModule {}
