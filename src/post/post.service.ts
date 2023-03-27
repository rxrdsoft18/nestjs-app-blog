import { Injectable } from '@nestjs/common';
import { UpvotePostInput } from './dtos/inputs/upvote-post.input';
import { CreatePostInput } from './dtos/inputs/create-post.input';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { GetPostsArgs } from './dtos/args/get-posts.args';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async findAll() {
    return this.postRepository.find();
  }

  async getPostsByAuthorId(args: GetPostsArgs) {
    return this.postRepository.find({
      where: { authorId: args.authorId },
    });
  }

  async findOneById(id: string) {
    return this.postRepository.findOne({ where: { id } });
  }

  async upvoteById(updatePostInput: UpvotePostInput) {
    const post = await this.findOneById(updatePostInput.postId);
    console.log('post', post);
    post.votes += 1;
    return this.postRepository.save(post);
  }

  async create(createPostInput: CreatePostInput) {
    const post = this.postRepository.create({
      id: uuid(),
      title: createPostInput.title,
      content: createPostInput.content,
      authorId: createPostInput.authorId,
      votes: 0,
    });

    console.log('post', post);

    return this.postRepository.save(post);
  }
}
