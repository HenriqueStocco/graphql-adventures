import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users {
  @PrimaryColumn()
  @PrimaryGeneratedColumn('uuid')
  public readonly id!: string;

  @Column('varchar')
  public name!: string;

  @Column('varchar')
  public email!: string;

  @Column('varchar')
  public hashedPassword!: string;

  @Column('timestamp with local time zone')
  @CreateDateColumn()
  public createdAt!: Date;

  @Column("timestamp with local time zone")
  @UpdateDateColumn()
  public updatedAt!: Date;
}