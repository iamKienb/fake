import { StatusEnum } from './../../types/enum/status.enum';
import { RoleEnum } from "src/types/enum/role.enum";

export interface UserInterface{
    id: string;
    username: string;
    email: string;
    password: string;
    image: string;
    role: RoleEnum,
    status: StatusEnum
    isVerified: boolean,
    createAt: Date,
    UpdateAt: Date
} 