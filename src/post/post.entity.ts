import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column({ default: 0 })
  votes: number;

  @Column()
  content: string;

  @Column()
  authorId: string;
}
