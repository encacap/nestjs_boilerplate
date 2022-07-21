import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto/user/createUser.dto';

@Controller('users')
export class UserController {
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): CreateUserDto {
        return createUserDto;
    }
}
