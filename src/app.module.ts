import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { ClientsConfigsModule } from './clients-configs/clients-configs.module';
import { TasksModule } from './tasks/tasks.module';
import { TasksRulesModule } from './tasks-rules/tasks-rules.module';
import { TaskRuleParametersModule } from './task-rule-parameters/task-rule-parameters.module';
import { ClientMetadataSchemasModule } from './client-metadata-schemas/client-metadata-schemas.module';
import { ClientMetadataModule } from './client-metadata/client-metadata.module';
import { ClientEventsModule } from './client-events/client-events.module';
import { EventsModule } from './events/events.module';
import { RecognitionEventsModule } from './recognition-events/recognition-events.module';
import { RecognitionImagesModule } from './recognition-images/recognition-images.module';
import { RecognitionInferenceModule } from './recognition-inference/recognition-inference.module';
import { LibraryObjectsModule } from './library-objects/library-objects.module';
import { LibraryObjectAttributesModule } from './library-object-attributes/library-object-attributes.module';
import { ObjectAttributesModule } from './object-attributes/object-attributes.module';
import { RuleOutputsModule } from './rule-outputs/rule-outputs.module';
import { RulesModule } from './rules/rules.module';
import { RulesModelsModule } from './rules-models/rules-models.module';
import { ModelsModule } from './models/models.module';
import { RuleParametersModule } from './rule-parameters/rule-parameters.module';
import { RuleResponsesModule } from './rule-responses/rule-responses.module';
import { ResponsesModule } from './responses/responses.module';
import { RecognitionRuleResultsModule } from './recognition-rule-results/recognition-rule-results.module';
import { RecognitionTaskResultsModule } from './recognition-task-results/recognition-task-results.module';
import { RecognitionOutputsModule } from './recognition-outputs/recognition-outputs.module';
import { RecognitionsModule } from './recognitions/recognitions.module';
import { ImagesModule } from './images/images.module';
import { RecognitionStatesModule } from './recognition-states/recognition-states.module';
import { ClientTaskResultsModule } from './client-task-results/client-task-results.module';
import { RecognitionInferenceRawModule } from './recognition-inference-raw/recognition-inference-raw.module';
import { RecognitionImagesSysModule } from './recognition-images-sys/recognition-images-sys.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    ClientsModule,
    ClientsConfigsModule,
    TasksModule,
    TasksRulesModule,
    TaskRuleParametersModule,
    ClientMetadataSchemasModule,
    ClientMetadataModule,
    ClientEventsModule,
    EventsModule,
    RecognitionEventsModule,
    RecognitionImagesModule,
    RecognitionInferenceModule,
    LibraryObjectsModule,
    LibraryObjectAttributesModule,
    ObjectAttributesModule,
    RuleOutputsModule,
    RulesModule,
    RulesModelsModule,
    ModelsModule,
    RuleParametersModule,
    RuleResponsesModule,
    ResponsesModule,
    RecognitionRuleResultsModule,
    RecognitionTaskResultsModule,
    RecognitionOutputsModule,
    RecognitionsModule,
    ImagesModule,
    RecognitionStatesModule,
    ClientTaskResultsModule,
    RecognitionInferenceRawModule,
    RecognitionImagesSysModule,
    CommonModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
