import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeveloperController } from './modules/developers/controller/developer.controller';
import { DeveloperModel } from './modules/developers/model/developer.model';
import { IntegrationModel } from './modules/developers/model/integration.model';
import { DeveloperService } from './modules/developers/service/developer.service';

@Module({
  imports: [ ConfigModule.forRoot(),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 
    
    'localhost'
    ,
    port: 
    
    5432

    ,
    username: 
    
    'postgres'
    ,
    password: 
    
    '1610'
    ,
    database: 
    
    'postgres'
    ,
    models:[DeveloperModel,IntegrationModel],
    autoLoadModels: true,
    synchronize: false,
  }),SequelizeModule.forFeature([DeveloperModel,IntegrationModel])],
  controllers: [AppController,DeveloperController],
  providers: [AppService,DeveloperService],
})
export class AppModule {}
