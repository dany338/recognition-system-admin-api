import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Rule } from './../../rules/entities/rule.entity';

@Entity({ name: 'rule_parameters' })
export class RuleParameter {
  @PrimaryGeneratedColumn('increment')
  rule_parameter_id: number;

  @Column('int', { nullable: false })
  rule_id: number;

  @Column('text', { nullable: false })
  key: string;

  @Column('text', { nullable: false })
  format: string;

  @Column('text', { nullable: true })
  input_validator: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Rule, (rule) => rule.rulesparameters, { onDelete: 'CASCADE' })
  rule: Rule;
}
