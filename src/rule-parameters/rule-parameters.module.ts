import { Module } from '@nestjs/common';
import { RuleParametersService } from './rule-parameters.service';
import { RuleParametersController } from './rule-parameters.controller';

@Module({
  controllers: [RuleParametersController],
  providers: [RuleParametersService],
})
export class RuleParametersModule {}
