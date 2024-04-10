import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Model } from './../../models/entities/model.entity';
import { Rule } from './../../rules/entities/rule.entity';

@Entity({ name: 'rule_models' })
export class RulesModel {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule Model ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  rule_model_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Model ID',
  })
  @Column('int', { nullable: false })
  model_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule ID',
  })
  @Column('int', { nullable: false })
  rule_id: number;

  @ApiProperty()
  @ManyToOne(() => Model, (model) => model.rulesmodels, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'model_id', referencedColumnName: 'model_id' })
  model: Model;

  @ApiProperty()
  @ManyToOne(() => Rule, (rule) => rule.tasksrules, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule: Rule;
}
