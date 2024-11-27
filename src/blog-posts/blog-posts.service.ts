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

  async findAll(): Promise<BlogPost[]> {
    return this.blogPostModel.find().exec();
  }

  async findOne(id: string): Promise<BlogPost> {
    return this.blogPostModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updateBlogPostDto: UpdateBlogPostDto): Promise<BlogPost> {
    return this.blogPostModel.findByIdAndUpdate({ _id: id }, updateBlogPostDto, { new: true }).exec();
  }

  async remove(id: string): Promise<BlogPost> {
    const deletedPost = await this.blogPostModel.findByIdAndDelete({ _id: id }).exec();

    return deletedPost;
  }
}
