import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';
import { RulesModel } from './../../rules-models/entities/rules-model.entity';
import { RuleParameter } from './../../rule-parameters/entities/rule-parameter.entity';
import { RuleOutput } from './../../rule-outputs/entities/rule-output.entity';

@Entity({ name: 'rules' })
export class Rule {
  @PrimaryGeneratedColumn('increment')
  rule_id: number;

  @Column('text', { nullable: false })
  name: string;

  @Column('text', { nullable: true })
  version: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: false })
  function_name: string;

  @Column('int', { nullable: true })
  weight: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => TasksRule, (tasksrule) => tasksrule.rule, {
    cascade: true,
    eager: true,
  })
  tasksrules?: TasksRule[];

  @OneToMany(() => RulesModel, (rulesmodel) => rulesmodel.rule, {
    cascade: true,
    eager: true,
  })
  rulesmodels?: RulesModel[];

  @OneToMany(() => RuleParameter, (rulesparameter) => rulesparameter.rule, {
    cascade: true,
    eager: true,
  })
  rulesparameters?: RuleParameter[];

  @OneToMany(() => RuleOutput, (ruleoutputs) => ruleoutputs.rule, {
    cascade: true,
    eager: true,
  })
  ruleoutputs?: RuleOutput[];
}
