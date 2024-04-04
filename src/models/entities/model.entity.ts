import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RulesModel } from './../../rules-models/entities/rules-model.entity';

@Entity({ name: 'models' })
export class Model {
  @PrimaryGeneratedColumn('increment')
  model_id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('text', { nullable: false })
  name: string;

  @Column('text', { nullable: false })
  version: string;

  @Column('text', { nullable: true })
  server: string;

  @Column('text', { nullable: true })
  server_path: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @OneToMany(() => RulesModel, (rulesmodel) => rulesmodel.model_id, {
    cascade: true,
    eager: true,
  })
  rulesmodels?: RulesModel[];
}
