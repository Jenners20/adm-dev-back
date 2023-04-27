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
exports.DeveloperController = void 0;
const common_1 = require("@nestjs/common");
const developer_service_1 = require("../service/developer.service");
let DeveloperController = class DeveloperController {
    constructor(developerService) {
        this.developerService = developerService;
    }
    async getDeveloper(response) {
        const result = await this.developerService.findAll();
        return response.status(common_1.HttpStatus.OK).json({
            result
        });
    }
    async getDeveloperbyId(response, id) {
        const result = await this.developerService.findbyId(id);
        return response.status(common_1.HttpStatus.OK).json({
            result
        });
    }
    async getIntegrationrbyId(response, id) {
        const result = await this.developerService.findIntegrationbyId(id);
        return response.status(common_1.HttpStatus.OK).json({
            result
        });
    }
    async createDeveloper(response, body) {
        await this.developerService.createDeveloper(body);
        return response.status(common_1.HttpStatus.OK).json({
            status: 'done'
        });
    }
    async createIntegration(response, body) {
        await this.developerService.createIntegration(body);
        return response.status(common_1.HttpStatus.OK).json({
            status: 'done'
        });
    }
    async getIntegration(response) {
        let result = await this.developerService.findIntegration();
        return response.status(common_1.HttpStatus.OK).json({
            result
        });
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeveloperController.prototype, "getDeveloper", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], DeveloperController.prototype, "getDeveloperbyId", null);
__decorate([
    (0, common_1.Get)('/integration/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], DeveloperController.prototype, "getIntegrationrbyId", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DeveloperController.prototype, "createDeveloper", null);
__decorate([
    (0, common_1.Post)('/integration'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DeveloperController.prototype, "createIntegration", null);
__decorate([
    (0, common_1.Get)('/integration'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeveloperController.prototype, "getIntegration", null);
DeveloperController = __decorate([
    (0, common_1.Controller)('developer'),
    __metadata("design:paramtypes", [developer_service_1.DeveloperService])
], DeveloperController);
exports.DeveloperController = DeveloperController;
//# sourceMappingURL=developer.controller.js.map