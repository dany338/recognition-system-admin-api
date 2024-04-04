import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClientsConfig } from '../../clients-configs/entities/clients-config.entity';

@Entity({ name: 'client_metadata_schemas' })
export class ClientMetadataSchema {
  @PrimaryGeneratedColumn('increment')
  client_metadata_schema_id: number;

  @Column('text', { nullable: false })
  normalized_key: string;

  @Column('bool', { nullable: false })
  required: boolean;

  @Column('bool', { nullable: false })
  validation: boolean;

  @Column('number', { nullable: true })
  validator_id: number;

  @Column('text', { nullable: false })
  type_value: string;

  @Column('text', { nullable: false })
  key: string;

  @Column('text', { nullable: false })
  label: string;

  @OneToMany(() => ClientsConfig, (clientConfig) => clientConfig.client_id, {
    cascade: true,
    eager: true,
  })
  configs?: ClientsConfig[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
