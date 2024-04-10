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
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';

@Entity({ name: 'task_rule_parameters' })
export class TaskRuleParameter {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task Rule Parameter ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  task_rule_parameter_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task Rule ID',
  })
  @Column('int', { nullable: false })
  task_rule_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule Parameter ID',
  })
  @Column('int', { nullable: false })
  rule_parameter_id: number;

  @ApiProperty({
    required: true,
    example: 'value',
    description: 'Value',
  })
  @Column('text', { nullable: false })
  value: string;

  @ApiProperty({ example: '2024-04-08T05:34:51.349Z', description: 'Task Rule Parameter Creation Date' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({ example: '2024-04-08T05:34:51.349Z', description: 'Task Rule Parameter Update Date' })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ApiProperty()
  @ManyToOne(() => TasksRule, (taskrule) => taskrule.taskruleparameters, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_rule_id', referencedColumnName: 'task_rule_id' })
  taskrule: TasksRule;
}
