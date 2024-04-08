import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { Task } from './entities/task.entity';
import { TasksRule } from './../tasks-rules/entities/tasks-rule.entity';
import { TaskRuleParameter } from './../task-rule-parameters/entities/task-rule-parameter.entity';

@Injectable()
export class TasksService {
  private readonly logger = new Logger('TasksService');

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    @InjectRepository(TasksRule)
    private readonly tasksRuleRepository: Repository<TasksRule>,
    @InjectRepository(TaskRuleParameter)
    private readonly taskRuleParameterRepository: Repository<TaskRuleParameter>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    try {
      const { tasksrules = [], ...taskDetails } = createTaskDto;
      const task = this.taskRepository.create({
        ...taskDetails,
        tasksrules: tasksrules.map((taskrule) =>
          this.tasksRuleRepository.create({
            ...taskrule as DeepPartial<TasksRule>,
            taskruleparameters: taskrule.taskruleparameters?.map((taskruleparameter) =>
              this.taskRuleParameterRepository.create(
                taskruleparameter as DeepPartial<TaskRuleParameter>,
              ),
            ),
          }),
        ),
      });
      await this.taskRepository.save(task);
      return { ...task, tasksrules: task.tasksrules };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async clone(id: number) {
    try {
      const task = await this.taskRepository.findOne({
        where: { task_id: id },
        relations: {
          tasksrules: {
            taskruleparameters: true,
            rule: true,
          },
        },
      });

      if (!task) throw new NotFoundException(`Task with ID ${id} not found`);

      const { tasksrules = [], ...taskDetails } = task;

      const clonedTask = this.taskRepository.create({
        ...taskDetails,
        task_id: undefined,
        tasksrules: task.tasksrules.map((taskrule) =>
          this.tasksRuleRepository.create({
            ...taskrule as DeepPartial<TasksRule>,
            task_rule_id: undefined,
            task_id: undefined,
            taskruleparameters: taskrule.taskruleparameters.map((taskruleparameter) =>
              this.taskRuleParameterRepository.create({
                ...taskruleparameter as DeepPartial<TaskRuleParameter>,
                task_rule_parameter_id: undefined,
                task_rule_id: undefined,
              }),
            ),
          }),
        ),
      });
      await this.taskRepository.save(clonedTask);
      return { ...clonedTask, tasksrules: clonedTask.tasksrules };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
