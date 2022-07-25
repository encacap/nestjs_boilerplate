import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@Exclude()
export class CreateUserEntity {
    @Expose()
    @IsEmail()
    email: string;

    @Expose()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @Expose()
    @IsNotEmpty()
    firstName: string;

    @Expose()
    @IsNotEmpty()
    lastName: string;
}
