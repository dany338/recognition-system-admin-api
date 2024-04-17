import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { PaginationDto } from './../common/dtos/pagination.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ImportTaskDto } from './dto/import-task.dto';
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

  async findAll(paginationDto: PaginationDto) {
    try {
      const { limit = 10, offset = 0, id = null, order, orderField = 'task_id' } = paginationDto;

      const queryBuilder = this.taskRepository.createQueryBuilder('task');

      // queryBuilder
      //   .leftJoinAndSelect('task.client_config', 'client_config')
      //   .leftJoinAndSelect('client_config.client', 'client')
      //   .leftJoinAndSelect('client_config.clientMetadataSchema', 'clientMetadataSchema')
      //   .leftJoinAndSelect('task.tasksrules', 'tasksrules')
      //   .leftJoinAndSelect('tasksrules.taskruleparameters', 'taskruleparameters')
      //   .leftJoinAndSelect('tasksrules.rule', 'rule');

      queryBuilder
        .addSelect([
          'client_config.default_bucket',
        ])
        .leftJoin('task.client_config', 'client_config')
        .addSelect([
          'client.client_id',
          'client.client_uid',
          'client.name',
        ])
        .leftJoin('client_config.client', 'client')
        .addSelect([
          'clientMetadataSchema.client_metadata_schema_id',
          'clientMetadataSchema.normalized_key',
          'clientMetadataSchema.required',
          'clientMetadataSchema.validation',
          'clientMetadataSchema.validator_id',
          'clientMetadataSchema.type_value',
          'clientMetadataSchema.key',
          'clientMetadataSchema.label',
        ])
        .leftJoin('client_config.clientMetadataSchema', 'clientMetadataSchema');

      queryBuilder
        .addSelect([
          'tasksrules.task_rule_id',
        ])
        .leftJoin('task.tasksrules', 'tasksrules')
        .addSelect([
          'taskruleparameters.task_rule_parameter_id',
          'taskruleparameters.value',
          'taskruleparameters.rule_parameter_id'
        ])
        .leftJoin('tasksrules.taskruleparameters', 'taskruleparameters')
        .addSelect([
          'rule.rule_id',
          'rule.name',
          'rule.version',
          'rule.description',
          'rule.function_name',
          'rule.weight',
        ])
        .leftJoin('tasksrules.rule', 'rule');

      if (id) {
        queryBuilder.andWhere('task.task_id = :id', { id });
      }

      queryBuilder.take(limit).skip(offset).orderBy(`task.${orderField}`, order);

      const tasks = await queryBuilder.getMany() ?? [];

      return tasks;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  // async import(importTaskDto: ImportTaskDto[]) {
  //   try {
  //     const tasks = importTaskDto.map((task) => {
  //       const { tasksrules = [], ...taskDetails } = task;
  //       return this.taskRepository.create({
  //         ...taskDetails,
  //         tasksrules: tasksrules.map((taskrule) =>
  //           this.tasksRuleRepository.create({
  //             ...taskrule as DeepPartial<TasksRule>,
  //             taskruleparameters: taskrule.taskruleparameters?.map((taskruleparameter) =>
  //               this.taskRuleParameterRepository.create(
  //                 taskruleparameter as DeepPartial<TaskRuleParameter>,
  //               ),
  //             ),
  //           }),
  //         ),
  //       });
  //     });

  //     await this.taskRepository.save(tasks);
  //     return tasks;
  //   } catch (error) {
  //     this.handleDBExceptions(error);
  //   }
  // }

  async import(importTaskDto: ImportTaskDto[]) {
    return await this.taskRepository.manager.transaction(async entityManager => {
      try {
        const tasks = importTaskDto.map(taskDto => {
          const { tasksrules = [], task_id, client_config, ...taskDetails } = taskDto;
          const task = entityManager.create(Task, taskDetails as DeepPartial<Task>);
          task.tasksrules = tasksrules.map(taskruleDto => {
            const { task_rule_id, ...ruleDetails } = taskruleDto;
            const taskrule = entityManager.create(TasksRule, ruleDetails as DeepPartial<TasksRule>);
            taskrule.taskruleparameters = taskruleDto.taskruleparameters?.map(paramDto => {
              const { task_rule_parameter_id, ...paramDetails } = paramDto;
              return entityManager.create(TaskRuleParameter, paramDetails as DeepPartial<TaskRuleParameter>)
            });
            return taskrule;
          });
          return task;
        });

        await entityManager.save(Task, tasks);
        return tasks;
      } catch (error) {
        throw new Error('Failed to import tasks due to an error: ' + error.message);
      }
    });
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
