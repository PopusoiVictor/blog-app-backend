import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  public updatedAt: Date;

  @Column({ name: 'title', nullable: false })
  public title: string;

  @Column({ type: 'text', name: 'content', nullable: false })
  public content: string;

  @Column({ name: 'author', nullable: false })
  public author: string;
}
