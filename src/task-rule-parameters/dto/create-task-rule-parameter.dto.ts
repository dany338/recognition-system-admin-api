import { IsInt, IsString, MinLength } from "class-validator";

export class CreateTaskRuleParameterDto {
  @IsInt()
  task_rule_id: number;

  @IsInt()
  rule_parameter_id: string;

  @IsString()
  @MinLength(3)
  value: string;
}
