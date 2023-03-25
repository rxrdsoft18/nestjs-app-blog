import { Injectable } from '@nestjs/common';
import { UpdatePostInput } from './dtos/inputs/update-post.input';

@Injectable()
export class PostService {
  async findAll() {
    return [];
  }

  async upvoteById(updatePostInput: UpdatePostInput) {
    return true;
  }
}
