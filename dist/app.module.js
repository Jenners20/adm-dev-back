"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const developer_controller_1 = require("./modules/developers/controller/developer.controller");
const developer_model_1 = require("./modules/developers/model/developer.model");
const integration_model_1 = require("./modules/developers/model/integration.model");
const developer_service_1 = require("./modules/developers/service/developer.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '1610',
                database: 'postgres',
                models: [developer_model_1.DeveloperModel, integration_model_1.IntegrationModel],
                autoLoadModels: true,
                synchronize: false,
            }), sequelize_1.SequelizeModule.forFeature([developer_model_1.DeveloperModel, integration_model_1.IntegrationModel])],
        controllers: [app_controller_1.AppController, developer_controller_1.DeveloperController],
        providers: [app_service_1.AppService, developer_service_1.DeveloperService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map