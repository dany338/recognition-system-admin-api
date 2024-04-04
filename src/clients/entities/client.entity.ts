import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ClientsConfig } from '../../clients-configs/entities/clients-config.entity';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn('increment')
  client_id: number;

  @Column('uuid', { nullable: false, unique: true })
  client_uid: string;

  @Column('text', { nullable: false, unique: true })
  name: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => ClientsConfig, (clientConfig) => clientConfig.client_id, {
    cascade: true,
    eager: true,
  })
  configs?: ClientsConfig[];

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
