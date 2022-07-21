import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

    async create(user: User): Promise<UserDocument> {
        const newUser = new this.userModal(user);
        return newUser.save();
    }

    async findAll(): Promise<UserDocument[]> {
        return this.userModal.find().exec();
    }
}
