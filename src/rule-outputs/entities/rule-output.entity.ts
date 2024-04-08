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
  @PrimaryGeneratedColumn('increment')
  rule_output_id: number;

  @Column('int', { nullable: false })
  rule_id: number;

  @Column('text', { nullable: false })
  type: string;

  @Column('text', { nullable: false })
  key: string;

  @Column('text', { nullable: false })
  label: string;

  @ManyToOne(() => Rule, (rule) => rule.ruleoutputs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule: Rule;
}
