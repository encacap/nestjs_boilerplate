import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.model';
import { RouterModule } from '@nestjs/core';
import { UserService } from './user.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema,
            },
        ]),
        RouterModule.register([
            {
                path: 'users',
            },
        ]),
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
