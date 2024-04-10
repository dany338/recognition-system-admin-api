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
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'client_configs' })
export class ClientsConfig {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Client Config ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  client_config_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Client ID',
  })
  @Column('int', { nullable: false })
  client_id: number;

  @ApiProperty({
    required: false,
    example: 1,
    description: 'Client Metadata Schema ID',
  })
  @Column('int', { nullable: true })
  client_metadata_schema_id?: number;

  @ApiProperty({
    required: false,
    example: 'default_bucket',
    description: 'Default Bucket',
  })
  @Column('text', { nullable: false })
  default_bucket: string;

  @ApiProperty({ example: '2024-04-08T05:34:51.349Z', description: 'Client Config Creation Date' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({ example: '2024-04-08T05:34:51.349Z', description: 'Client Config Update Date' })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ApiProperty()
  @ManyToOne(() => Client, (client) => client.configs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'client_id', referencedColumnName: 'client_id' })
  client: Client;

  @ApiProperty()
  @OneToMany(() => Task, (task) => task.client_config, {
    cascade: true,
    eager: true,
  })
  tasks?: Task[];

  @ApiProperty()
  @ManyToOne(
    () => ClientMetadataSchema,
    (clientMetadataSchema) => clientMetadataSchema.configs,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'client_metadata_schema_id', referencedColumnName: 'client_metadata_schema_id' })
  clientMetadataSchema: ClientMetadataSchema;
}
