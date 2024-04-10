import { ApiProperty } from '@nestjs/swagger';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ClientsConfig } from '../../clients-configs/entities/clients-config.entity';

@Entity({ name: 'clients' })
export class Client {
  @ApiProperty({ example: 1, description: 'Client ID', uniqueItems: true })
  @PrimaryGeneratedColumn('increment')
  client_id: number;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Client UID',
  })
  @Column('uuid', { nullable: false, unique: true })
  client_uid: string;

  @ApiProperty({
    example: 'Ejemplo de Cliente - Daniel test 2',
    description: 'Client Name - Unique',
    uniqueItems: true,
  })
  @Column('text', { nullable: false, unique: true })
  name: string;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Client Creation Date',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Client Update Date',
  })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ApiProperty()
  @OneToMany(() => ClientsConfig, (clientConfig) => clientConfig.client, {
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
