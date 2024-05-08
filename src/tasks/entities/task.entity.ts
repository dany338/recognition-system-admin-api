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
import { ClientsConfig } from '../../clients-configs/entities/clients-config.entity';
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';
import { ApiProperty } from '@nestjs/swagger';
import { TaskRuleLabel } from 'src/task-rule-labels/entities/task-rule-label.entity';

@Entity({ name: 'tasks' })
export class Task {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('increment')
  task_id: number;

  @ApiProperty({
    required: true,
    example: 'task_key',
    description: 'Task Key - Unique',
    minLength: 3,
  })
  @Column('text', { nullable: false })
  task_key: string;

  @ApiProperty({
    required: false,
    example: 'Task Name',
    description: 'Task Name',
  })
  @Column('text', { nullable: true })
  name: string;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Client Config ID',
  })
  @Column('int', { nullable: false })
  client_config_id: number;

  @ApiProperty({
    required: false,
    example: 'Task Description',
    description: 'Task Description',
  })
  @Column('text', { nullable: true })
  description: string;

  @ApiProperty({
    required: false,
    example: 1,
    description: 'Task Required Score',
  })
  @Column('int', { nullable: true })
  required_score: number;

  @ApiProperty({
    required: true,
    example: 'Task Run Type',
    description: 'Task Run Type',
  })
  @Column('text', { nullable: false })
  run_type: string;

  @ApiProperty({ example: '2024-04-08T05:34:51.349Z', description: 'Task Creation Date' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ApiProperty({ example: '2024-04-08T05:34:51.349Z', description: 'Task Update Date' })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ApiProperty()
  @ManyToOne(() => ClientsConfig, (clientsConfig) => clientsConfig.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'client_config_id', referencedColumnName: 'client_config_id' })
  client_config: ClientsConfig;

  @ApiProperty()
  @OneToMany(() => TasksRule, (tasksrule) => tasksrule.task, {
    cascade: true,
    // eager: true,
  })
  tasksrules?: TasksRule[];

  @ApiProperty()
  @OneToMany(() => TaskRuleLabel, (taskrulelabel) => taskrulelabel.task, {
    cascade: true,
    // eager: true,
  })
  taskrulelabels?: TaskRuleLabel[];
}
