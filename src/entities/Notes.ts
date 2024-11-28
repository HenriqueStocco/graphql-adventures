import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Notes {
  @PrimaryColumn('uniqueidentifier')
  @PrimaryGeneratedColumn('uuid')
  public readonly id!: string;

  @Column('varchar', { length: 120 })
  public title!: string;

  @Column('varchar', { length: 255 })
  public description!: string;

  @Column('timestamp with local time zone')
  @CreateDateColumn()
  public createdAt!: Date;

  @Column('timestamp with local time zone')
  @UpdateDateColumn()
  public updatedAt!: Date;

  @Column('uuid')
  @ManyToOne(() => Users, (user) => user.id, { cascade: true })
  public userId!: string;
}