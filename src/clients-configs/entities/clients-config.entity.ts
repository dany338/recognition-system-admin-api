import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Client } from '../../clients/entities/client.entity';
import { ClientMetadataSchema } from '../../client-metadata-schemas/entities/client-metadata-schema.entity';

@Entity({ name: 'client_configs' })
export class ClientsConfig {
  @PrimaryGeneratedColumn('increment')
  client_config_id: number;

  @Column('int', { nullable: false })
  client_id: number;

  @Column('int', { nullable: true })
  client_metadata_schema_id: number;

  @Column('text', { nullable: false })
  default_bucket: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Client, (client) => client.configs, { onDelete: 'CASCADE' })
  client: Client;

  @ManyToOne(
    () => ClientMetadataSchema,
    (clientMetadataSchema) => clientMetadataSchema.configs,
  )
  clientMetadataSchema: ClientMetadataSchema;
}
