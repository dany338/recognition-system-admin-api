import { IsArray, IsInt, IsOptional } from "class-validator";
import { DeepPartial } from "typeorm";
import { TaskRuleParameter } from "./../../task-rule-parameters/entities/task-rule-parameter.entity";

export class CreateTasksRuleDto {
  @IsInt()
  rule_id: number;

  @IsInt()
  task_id: number;

  @IsArray()
  @IsOptional()
  taskruleparameters?: DeepPartial<TaskRuleParameter>[];
}
