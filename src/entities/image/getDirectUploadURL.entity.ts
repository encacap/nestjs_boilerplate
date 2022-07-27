import { IsEnum, IsMongoId, IsNotEmpty } from 'class-validator';
import { PostType } from 'src/interfaces/enums';

export class GetDirectUploadURLEntity {
    @IsNotEmpty()
    @IsEnum([PostType.ESTATE, PostType.NEWS])
    postType: PostType;

    @IsNotEmpty()
    @IsMongoId()
    postId: string;
}
