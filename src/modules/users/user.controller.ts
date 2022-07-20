import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UserController {
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
        return `This action adds a new user: ${JSON.stringify(createUserDto)}`;
    }
}
