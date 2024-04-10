import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RulesModel } from './../../rules-models/entities/rules-model.entity';

@Entity({ name: 'models' })
export class Model {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Model ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  model_id: number;

  @ApiProperty({
    required: true,
    example: 'Model Description',
    description: 'Model Description',
  })
  @Column('text', { nullable: true })
  description: string;

  @ApiProperty({
    required: true,
    example: 'Model Name',
    description: 'Model Name',
  })
  @Column('text', { nullable: false })
  name: string;

  @ApiProperty({
    required: true,
    example: 'Model Version',
    description: 'Model Version',
  })
  @Column('text', { nullable: false })
  version: string;

  @ApiProperty({
    required: true,
    example: 'Model Server',
    description: 'Model Server',
  })
  @Column('text', { nullable: true })
  server: string;

  @ApiProperty({
    required: true,
    example: 'Model Server Path',
    description: 'Model Server Path',
  })
  @Column('text', { nullable: true })
  server_path: string;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Model Creation Date',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Model Update Date',
  })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ApiProperty()
  @OneToMany(() => RulesModel, (rulesmodel) => rulesmodel.model, {
    cascade: true,
    eager: true,
  })
  rulesmodels?: RulesModel[];
}
