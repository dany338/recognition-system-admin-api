import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Rule } from './../../rules/entities/rule.entity';

@Entity({ name: 'rule_outputs' })
export class RuleOutput {
  @ApiProperty({ example: 1, description: 'Rule Output ID', uniqueItems: true })
  @PrimaryGeneratedColumn('increment')
  rule_output_id: number;

  @ApiProperty({ example: 1, description: 'Rule ID' })
  @Column('int', { nullable: false })
  rule_id: number;

  @ApiProperty({ example: 'Type', description: 'Rule Output Type' })
  @Column('text', { nullable: false })
  type: string;

  @ApiProperty({ example: 'Key', description: 'Rule Output Key' })
  @Column('text', { nullable: false })
  key: string;

  @ApiProperty({ example: 'Label', description: 'Rule Output Label' })
  @Column('text', { nullable: false })
  label: string;

  @ApiProperty()
  @ManyToOne(() => Rule, (rule) => rule.ruleoutputs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule: Rule;
}
