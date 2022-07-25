import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserEntity } from '../../entities/user/createUser.entity';

@Controller('users')
export class UserController {
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Post()
    create(@Body() createUserDto: CreateUserEntity): CreateUserEntity {
        return createUserDto;
    }
}
