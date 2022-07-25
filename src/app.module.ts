import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import * as Joi from 'joi';

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
    providers: [],
})
export class AppModule {}
