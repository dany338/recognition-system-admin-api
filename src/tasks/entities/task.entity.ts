import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClientsConfig } from '../../clients-configs/entities/clients-config.entity';
import { TasksRule } from './../../tasks-rules/entities/tasks-rule.entity';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn('increment')
  task_id: number;

  @Column('text', { nullable: false })
  task_key: string;

  @Column('text', { nullable: true })
  name: string;

  @Column('int', { nullable: false })
  client_config_id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('int', { nullable: true })
  required_score: number;

  @Column('text', { nullable: false })
  run_type: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => ClientsConfig, (clientsConfig) => clientsConfig.tasks, { onDelete: 'CASCADE' })
  client_config: ClientsConfig;

  @OneToMany(() => TasksRule, (tasksrule) => tasksrule.task_id, {
    cascade: true,
    eager: true,
  })
  tasksrules?: TasksRule[];
}
