import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dtos/inputs/create-author.input';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async findOneById(id: string): Promise<Author> {
    return this.authorRepository.findOne({ where: { id } });
  }

  async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const author = this.authorRepository.create({
      id: uuid(),
      firstName: createAuthorInput.firstName,
      lastName: createAuthorInput.lastName,
    });
    return this.authorRepository.save(author);
  }
}
