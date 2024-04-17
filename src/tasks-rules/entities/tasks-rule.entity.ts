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
import { Task } from './../../tasks/entities/task.entity';
import { Rule } from './../../rules/entities/rule.entity';
import { TaskRuleParameter } from './../../task-rule-parameters/entities/task-rule-parameter.entity';

@Entity({ name: 'task_rules' })
export class TasksRule {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task Rule ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  task_rule_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule ID',
  })
  @Column('int', { nullable: false })
  rule_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task ID',
  })
  @Column('int', { nullable: false })
  task_id: number;

  @ApiProperty()
  @ManyToOne(() => Task, (task) => task.tasksrules, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_id', referencedColumnName: 'task_id' })
  task: Task;

  @ApiProperty()
  @ManyToOne(() => Rule, (rule) => rule.tasksrules, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule: Rule;

  @ApiProperty()
  @OneToMany(() => TaskRuleParameter, (taskruleparameter) => taskruleparameter.taskrule, {
    cascade: true,
    // eager: true,
  })
  taskruleparameters?: TaskRuleParameter[];
}
