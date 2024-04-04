import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from './../../tasks/entities/task.entity';
import { Rule } from './../../rules/entities/rule.entity';
import { TaskRuleParameter } from './../../task-rule-parameters/entities/task-rule-parameter.entity';

@Entity({ name: 'task_rules' })
export class TasksRule {
  @PrimaryGeneratedColumn('increment')
  task_rule_id: number;

  @Column('int', { nullable: false })
  rule_id: number;

  @Column('int', { nullable: false })
  task_id: number;

  @ManyToOne(() => Task, (task) => task.tasksrules, { onDelete: 'CASCADE' })
  task: Task;

  @ManyToOne(() => Rule, (rule) => rule.tasksrules, { onDelete: 'CASCADE' })
  rule: Rule;

  @OneToMany(() => TaskRuleParameter, (taskruleparameter) => taskruleparameter.task_rule_id, {
    cascade: true,
    eager: true,
  })
  taskruleparameters?: TaskRuleParameter[];
}
