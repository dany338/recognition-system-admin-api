// import { PartialType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateRulesModelDto } from './create-rules-model.dto';

export class UpdateRulesModelDto extends PartialType(CreateRulesModelDto) {}
