import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserRole } from '../enums/UserRole';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn({ name: 'created_at', nullable: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', nullable: false })
  public updatedAt: Date;

  @Column({ name: 'username', unique: true, nullable: false })
  public username: string;

  @Column({ name: 'password', select: false, nullable: false })
  public password: string;

  @Column('enum', {
    name: 'role',
    enum: UserRole,
    default: UserRole.USER,
  })
  public role: UserRole;
}
