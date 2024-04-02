import { PartialType } from '@nestjs/mapped-types';
import { CreateClientTaskResultDto } from './create-client-task-result.dto';

export class UpdateClientTaskResultDto extends PartialType(CreateClientTaskResultDto) {}
