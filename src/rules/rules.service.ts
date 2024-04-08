import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateRuleDto } from './dto/create-rule.dto';
import { UpdateRuleDto } from './dto/update-rule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { Rule } from './entities/rule.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { TasksRule } from './../tasks-rules/entities/tasks-rule.entity';
import { RulesModel } from './../rules-models/entities/rules-model.entity';
import { RuleParameter } from './../rule-parameters/entities/rule-parameter.entity';
import { RuleOutput } from './../rule-outputs/entities/rule-output.entity';

@Injectable()
export class RulesService {
  private readonly logger = new Logger('RulesService');

  constructor(
    @InjectRepository(Rule)
    private readonly ruleRepository: Repository<Rule>,
    @InjectRepository(TasksRule)
    private readonly tasksRuleRepository: Repository<TasksRule>,
    @InjectRepository(RulesModel)
    private readonly rulesModelRepository: Repository<RulesModel>,
    @InjectRepository(RuleParameter)
    private readonly ruleParameterRepository: Repository<RuleParameter>,
    @InjectRepository(RuleOutput)
    private readonly ruleOutputRepository: Repository<RuleOutput>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createRuleDto: CreateRuleDto) {
    try {
      const {
        tasksrules = [],
        rulesmodels = [],
        rulesparameters = [],
        ruleoutputs = [],
        ...ruleDetails
      } = createRuleDto;
      const rule = this.ruleRepository.create({
        ...ruleDetails,
        tasksrules: tasksrules.map((taskrule) =>
          this.tasksRuleRepository.create({
            ...(taskrule as DeepPartial<TasksRule>),
          }),
        ),
        rulesmodels: rulesmodels.map((rulesmodel) =>
          this.rulesModelRepository.create({
            ...(rulesmodel as DeepPartial<RulesModel>),
          }),
        ),
        rulesparameters: rulesparameters.map((ruleparameter) =>
          this.ruleParameterRepository.create({
            ...(ruleparameter as DeepPartial<RuleParameter>),
          }),
        ),
        ruleoutputs: ruleoutputs.map((ruleoutput) =>
          this.ruleOutputRepository.create({
            ...(ruleoutput as DeepPartial<RuleOutput>),
          }),
        ),
      });
      await this.ruleRepository.save(rule);
      return { ...rule, tasksrules, rulesmodels, rulesparameters, ruleoutputs };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return `This action returns all rules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rule`;
  }

  update(id: number, updateRuleDto: UpdateRuleDto) {
    return `This action updates a #${id} rule`;
  }

  remove(id: number) {
    return `This action removes a #${id} rule`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
