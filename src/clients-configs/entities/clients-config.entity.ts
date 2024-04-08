import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Client } from './../../clients/entities/client.entity';
import { ClientMetadataSchema } from './../../client-metadata-schemas/entities/client-metadata-schema.entity';
import { Task } from './../../tasks/entities/task.entity';
import { ForeignKeyMetadata } from 'typeorm/metadata/ForeignKeyMetadata';

@Entity({ name: 'client_configs' })
export class ClientsConfig {
  @PrimaryGeneratedColumn('increment')
  // @PrimaryColumn({ unique: true })
  client_config_id: number;

  @Column('int', { nullable: false })
  client_id: number;

  @Column('int', { nullable: true })
  client_metadata_schema_id?: number;

  @Column('text', { nullable: false })
  default_bucket: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Client, (client) => client.configs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @OneToMany(() => Task, (task) => task.client_config, {
    cascade: true,
    eager: true,
  })
  tasks?: Task[];

  // @ManyToOne(
  //   () => ClientMetadataSchema,
  //   (clientMetadataSchema) => clientMetadataSchema.configs,
  //   { onDelete: 'CASCADE' },
  // )
  // @JoinColumn({ name: 'client_metadata_schema_id' })
  // clientMetadataSchema: ClientMetadataSchema;
}
