import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('increment')
  // @PrimaryColumn('integer', { generated: true, nullable: false })
  client_id: number;

  @Column('uuid', { nullable: false, unique: true })
  client_uid: string;

  @Column('text', { nullable: false, unique: true })
  name: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @BeforeInsert()
  checkClientUidInsert() {
    if (!this.client_uid) {
      this.client_uid = uuid();
    }
    this.client_uid = this.client_uid.replaceAll(' ', '_').replaceAll("'", '');
  }

  @BeforeUpdate()
  checkClientUidUpdate() {
    this.client_uid = this.client_uid.replaceAll(' ', '_').replaceAll("'", '');
  }
}
