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
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';

@Entity({ name: 'task_rule_parameters' })
export class TaskRuleParameter {
  @PrimaryGeneratedColumn('increment')
  task_rule_parameter_id: number;

  @Column('int', { nullable: false })
  task_rule_id: number;

  @Column('int', { nullable: false })
  rule_parameter_id: number;

  @Column('text', { nullable: false })
  value: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => TasksRule, (taskrule) => taskrule.taskruleparameters, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_rule_id', referencedColumnName: 'task_rule_id' })
  taskrule: TasksRule;
}
