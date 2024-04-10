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

@Entity({ name: 'rule_parameters' })
export class RuleParameter {
  @ApiProperty({
    example: 1,
    description: 'Rule Parameter ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  rule_parameter_id: number;

  @ApiProperty({
    example: 1,
    description: 'Rule ID',
  })
  @Column('int', { nullable: false })
  rule_id: number;

  @ApiProperty({
    example: 'key',
    description: 'Key',
  })
  @Column('text', { nullable: false })
  key: string;

  @ApiProperty({
    example: 'format',
    description: 'Format',
  })
  @Column('text', { nullable: false })
  format: string;

  @ApiProperty({
    example: 'input_validator',
    description: 'Input Validator',
  })
  @Column('text', { nullable: true })
  input_validator: string;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Rule Parameter Creation Date',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Rule Parameter Update Date',
  })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ApiProperty()
  @ManyToOne(() => Rule, (rule) => rule.rulesparameters, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule: Rule;
}
