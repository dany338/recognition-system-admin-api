import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Client {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { nullable: false, unique: true })
  title: string;

}
