import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { RoleGuard } from './core/role.guard';
import { AuthModule } from './modules/auth/auth.module';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development', '.env.production'],
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
                PORT: Joi.number().default(3000),
                MONGO_URL: Joi.string().required(),
                JWT_SECRET: Joi.string().required(),
                JWT_EXPIRATION_MINUTES: Joi.number().default(30),
            }),
            validationOptions: { stripUnknown: true, abortEarly: true },
            expandVariables: true,
            isGlobal: true,
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get('MONGO_URL'),
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }),
            inject: [ConfigService],
        }),
        UserModule,
        AuthModule,
    ],
    controllers: [UserController],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RoleGuard,
        },
    ],
})
export class AppModule {}
