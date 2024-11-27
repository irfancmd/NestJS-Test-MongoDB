import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class BlogPost {
    @Prop()
    title: string;

    @Prop([String])
    tags: string[];

    @Prop()
    metaDescription: string;

    @Prop()
    text: string;
}

export type BlogPostDocument = HydratedDocument<BlogPost>;

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);
