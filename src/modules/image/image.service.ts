import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { PostType } from 'src/interfaces/enums';
import { UserDocument } from '../user/user.model';

@Injectable()
export class ImageService {
    constructor(private readonly httpService: HttpService) {}

    async getDirectUploadURL(postType: PostType, user: UserDocument, postId: string) {
        try {
            const fileName = this.generateFileName(postType, user.id, postId);
            const response = await lastValueFrom(this.httpService.post('v2/direct_upload'));
            const uploadURL = response.data.result.uploadURL;
            return {
                uploadURL,
                fileName,
            };
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    private generateFileName(postType: PostType, userId: string, postId: string) {
        return `${postType}_${userId}_${postId}`;
    }
}
