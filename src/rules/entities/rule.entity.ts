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
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';
import { RulesModel } from './../../rules-models/entities/rules-model.entity';
import { RuleParameter } from './../../rule-parameters/entities/rule-parameter.entity';
import { RuleOutput } from './../../rule-outputs/entities/rule-output.entity';

@Entity({ name: 'rules' })
export class Rule {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  rule_id: number;

  @ApiProperty({
    required: true,
    example: 'Rule Name',
    description: 'Rule Name',
  })
  @Column('text', { nullable: false })
  name: string;

  @ApiProperty({
    required: true,
    example: 'Rule Version',
    description: 'Rule Version',
  })
  @Column('text', { nullable: true })
  version: string;

  @ApiProperty({
    required: true,
    example: 'Rule Description',
    description: 'Rule Description',
  })
  @Column('text', { nullable: true })
  description: string;

  @ApiProperty({
    required: true,
    example: 'Rule Function Name',
    description: 'Rule Function Name',
  })
  @Column('text', { nullable: false })
  function_name: string;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule Weight',
  })
  @Column('int', { nullable: true })
  weight: number;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Rule Creation Date',
  })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({
    example: '2024-04-08T05:34:51.349Z',
    description: 'Rule Update Date',
  })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => TasksRule, (tasksrule) => tasksrule.rule, {
    cascade: true,
    eager: true,
  })
  tasksrules?: TasksRule[];

  @ApiProperty()
  @OneToMany(() => RulesModel, (rulesmodel) => rulesmodel.rule, {
    cascade: true,
    eager: true,
  })
  rulesmodels?: RulesModel[];

  @ApiProperty()
  @OneToMany(() => RuleParameter, (rulesparameter) => rulesparameter.rule, {
    cascade: true,
    eager: true,
  })
  rulesparameters?: RuleParameter[];

  @ApiProperty()
  @OneToMany(() => RuleOutput, (ruleoutputs) => ruleoutputs.rule, {
    cascade: true,
    eager: true,
  })
  ruleoutputs?: RuleOutput[];
}
