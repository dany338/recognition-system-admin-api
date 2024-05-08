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
import { Task } from '../../tasks/entities/task.entity';
import { Rule } from 'src/rules/entities/rule.entity';

@Entity({ name: 'task_rule_labels' })
export class TaskRuleLabel {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task Rule Label ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  task_rule_label_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task ID',
  })
  @Column('int', { nullable: false })
  task_id: number;

  @ApiProperty({
    required: true,
    example: 'value',
    description: 'Value',
  })
  @Column('text', { nullable: false })
  value: string;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule ID',
  })
  @Column('int', { nullable: false })
  rule_id: number;

  @ApiProperty()
  @ManyToOne(() => Task, (task) => task.taskrulelabels, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'task_id', referencedColumnName: 'task_id' })
  task: Task;

  @ApiProperty()
  @ManyToOne(() => Rule, (rule) => rule.taskrulelabels, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'rule_id', referencedColumnName: 'rule_id' })
  rule: Rule;
}
