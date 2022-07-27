import { Prop, raw, SchemaFactory } from '@nestjs/mongoose';

export interface ImageDocument extends Image, Document {}

export class Image {
    @Prop({
        type: Boolean,
        default: false,
    })
    requireSignedURLs: boolean;

    @Prop({
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    })
    name: string;

    @Prop(
        raw({
            original: String,
            thumbnail: String,
        }),
    )
    variants: Record<string, string>;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
