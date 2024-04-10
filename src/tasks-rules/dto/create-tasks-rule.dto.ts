import { IsArray, IsInt, IsOptional } from "class-validator";
import { DeepPartial } from "typeorm";
import { TaskRuleParameter } from "./../../task-rule-parameters/entities/task-rule-parameter.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTasksRuleDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: 'Rule ID',
  })
  @IsInt()
  rule_id: number;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'Task ID',
  })
  @IsInt()
  task_id: number;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  taskruleparameters?: DeepPartial<TaskRuleParameter>[];
}
