import { Exclude } from "class-transformer";
import { RoleEnum } from "src/types/enum/role.enum";
import { StatusEnum } from "src/types/enum/status.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export default class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false})
    email: string;

    @Exclude()
    @Column({nullable: false})
    password: string;

    @Column({
        nullable: true,
        default: 'not found'
    })
    image: string;

    @Column({
        type: "enum",
        enum: RoleEnum,
        default: RoleEnum.USER,
        nullable: false,
        
    })
    role: RoleEnum;

    @Column({
        type: "enum",
        enum: StatusEnum,
        default: StatusEnum.INACTIVE,
        nullable: false,

    })
    status: StatusEnum;


    @Column({nullable: false})
    isVerified: boolean;

    @CreateDateColumn({type: 'timestamp'})
    createAt: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updateAt: Date;

}