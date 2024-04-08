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
  @PrimaryGeneratedColumn('increment')
  rule_model_id: number;

  @Column('int', { nullable: false })
  model_id: number;

  @Column('int', { nullable: false })
  rule_id: number;

  @ManyToOne(() => Model, (model) => model.rulesmodels, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'model_id', referencedColumnName: 'model_id' })
  model: Model;

  @ManyToOne(() => Rule, (rule) => rule.tasksrules, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule: Rule;
}
