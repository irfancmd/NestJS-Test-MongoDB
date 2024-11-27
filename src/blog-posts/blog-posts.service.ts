import { Injectable } from '@nestjs/common';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BlogPost } from './entities/blog-post.entity';
import { Model } from 'mongoose';

@Injectable()
export class BlogPostsService {
  constructor(
    @InjectModel(BlogPost.name) private blogPostModel: Model<BlogPost>
  ) {}

  async create(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    const createdPost = new this.blogPostModel(createBlogPostDto);

    return createdPost.save();
  }

  findAll(): Promise<BlogPost[]> {
    return this.blogPostModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} blogPost`;
  }

  update(id: number, updateBlogPostDto: UpdateBlogPostDto) {
    return `This action updates a #${id} blogPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} blogPost`;
  }
}
