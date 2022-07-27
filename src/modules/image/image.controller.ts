import { Body, Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetDirectUploadURLEntity } from 'src/entities/image/getDirectUploadURL.entity';
import { ImageDirectUploadURLEntity } from 'src/entities/image/imageDirectUploadURL.entity';
import { ImageService } from './image.service';

@UseGuards(AuthGuard('jwt'))
@Controller('images')
export class ImageController {
    constructor(private readonly imageService: ImageService) {}

    @Get('direct-upload-url')
    async getDirectUploadURL(
        @Body() data: GetDirectUploadURLEntity,
        @Request() req,
    ): Promise<ImageDirectUploadURLEntity> {
        const fileName = await this.imageService.getDirectUploadURL(data.postType, req.user, data.postId);
        return fileName;
    }
}
