import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateModelDto } from './dto/create-model.dto';
import { UpdateModelDto } from './dto/update-model.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, DeepPartial, Repository } from 'typeorm';
import { v4 as uuid, validate as isUUID } from 'uuid';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { Model } from './entities/model.entity';
import { RulesModel } from './../rules-models/entities/rules-model.entity';

@Injectable()
export class ModelsService {
  private readonly logger = new Logger('ModelsService');

  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
    @InjectRepository(RulesModel)
    private readonly rulesModelRepository: Repository<RulesModel>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createModelDto: CreateModelDto) {
    try {
      const { rulesmodels = [], ...modelDetails } = createModelDto;
      const model = this.modelRepository.create({
        ...modelDetails,
        rulesmodels: rulesmodels.map((model) =>
          this.rulesModelRepository.create(
            model as DeepPartial<RulesModel>,
          ),
        ),
      });
      await this.modelRepository.save(model);
      return { ...model, rulesmodels };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return `This action returns all models`;
  }

  findOne(id: number) {
    return `This action returns a #${id} model`;
  }

  update(id: number, updateModelDto: UpdateModelDto) {
    return `This action updates a #${id} model`;
  }

  remove(id: number) {
    return `This action removes a #${id} model`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
