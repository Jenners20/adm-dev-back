"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const developer_model_1 = require("../model/developer.model");
const integration_model_1 = require("../model/integration.model");
let DeveloperService = class DeveloperService {
    constructor(developerModel, integrationModel) {
        this.developerModel = developerModel;
        this.integrationModel = integrationModel;
    }
    async findAll() {
        let developers = await this.developerModel.findAll();
        return developers;
    }
    async findIntegration() {
        let integration = await this.integrationModel.findAll();
        return integration;
    }
    async findbyId(id) {
        let developers = await this.developerModel.findAll({ where: { "developer_id": id } });
        return developers;
    }
    async findIntegrationbyId(id) {
        let integration = await this.integrationModel.findAll({ where: { "developer_id": id } });
        return integration;
    }
    async createIntegration(body) {
        await this.integrationModel.create(body);
    }
    async createDeveloper(body) {
        if (body.developer_id == 0) {
            const companyModelResponse = await this.developerModel.findAll();
            const ids = companyModelResponse.map(developer => developer['developer_id']);
            let aux = Math.max(...ids);
            aux = aux + 1;
            let bodyDB = {
                "developer_id": body.developer_id,
                "developer_name": body.developer_name,
                "developer_company": body.developer_company,
                "certification_id": body.certification_id,
                "email": body.email,
                "phone": body.phone,
                "POS": body.POS,
                "program_name": body.program_name,
                "independent": body.independent,
            };
            await this.developerModel.create(bodyDB);
        }
        else {
            await this.developerModel.create(body);
        }
    }
};
DeveloperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(developer_model_1.DeveloperModel)),
    __param(1, (0, sequelize_1.InjectModel)(integration_model_1.IntegrationModel)),
    __metadata("design:paramtypes", [Object, Object])
], DeveloperService);
exports.DeveloperService = DeveloperService;
//# sourceMappingURL=developer.service.js.map