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
const XLSX = require('xlsx');
const path_1 = require("path");
const fs = require('fs');
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
        try {
            let integration = await this.integrationModel.findAll({ where: { "developer_id": id } });
            return integration;
        }
        catch (err) {
            return { "success": false, "data": {}, "reason": "Invalid Parameters" };
        }
    }
    async createIntegration(body) {
        let integrationResponse = await this.integrationModel.findAll();
        const ids = integrationResponse.map(developer => developer['integration_id']);
        let aux = Math.max(...ids);
        if (integrationResponse.length == 0) {
            aux = 1;
        }
        else {
            aux = aux + 1;
        }
        console.log(body);
        let integrationDB = {
            "integration_id": aux,
            "developer_id": body.developer_id,
            "company_name": body.company_name,
            "service_type": body.service_type,
            "status": body.status,
            "production_date": body.production_date,
            "start_lab_date": body.start_lab_date,
            "end_lab_date": body.end_lab_date,
            "cant_comercios": body.cant_comercios,
            "cant_pos": body.cant_pos
        };
        await this.integrationModel.create(integrationDB);
    }
    async createDeveloper(body) {
        console.log(body);
        const companyModelResponse = await this.developerModel.findAll();
        const ids = companyModelResponse.map(developer => developer['developer_id']);
        let aux = Math.max(...ids);
        if (companyModelResponse.length == 0) {
            aux = 1;
        }
        else {
            aux = aux + 1;
        }
        let bodyDB = {
            "developer_id": aux,
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
    async deleteDeveloper(id) {
        await this.developerModel.destroy({ where: { "developer_id": id } });
    }
    async deleteIntegration(id) {
        await this.integrationModel.destroy({ where: { "integration_id": id } });
    }
    async getIntegrationbyDate(date) {
        let integrations = await this.integrationModel.findAll({ where: { "status": date } });
        return integrations;
    }
    async updateIntegration(id, status) {
        await this.integrationModel.findOne({ where: { "integration_id": id } }).then(integration => {
            integration.update({ "status": status }).catch(updated => console.log(updated));
        });
    }
    async saveForm(body) {
        let folder_name = './files/';
        if (!fs.existsSync(folder_name)) {
            fs.mkdirSync(folder_name, { recursive: true });
        }
        let path = (0, path_1.join)(process.cwd(), folder_name + body.name);
        let base64Image = body.data.split(';base64,').pop();
        fs.writeFile(path, base64Image, { encoding: 'base64' }, function (err) {
        });
    }
    async insertDB(name) {
        let developer = await this.developerModel.findAll();
        let integration = await this.integrationModel.findAll();
        let maxidDeveloper;
        let idDeveloper = developer.map(item => item['developer_id']);
        if (idDeveloper.length != 0) {
            maxidDeveloper = Math.max(...idDeveloper);
            console.log(maxidDeveloper);
            console.log(idDeveloper);
        }
        else {
            maxidDeveloper = 0;
        }
        let maxidIntegration;
        let idintegration = integration.map(item => item['integration_id']);
        if (idintegration.length != 0) {
            maxidIntegration = Math.max(...idintegration);
        }
        else {
            maxidIntegration = 0;
            console.log('aqui');
        }
        maxidIntegration++;
        let company_name = integration.map(company => company['company_name']);
        let service = integration.map(company => company['service_type']);
        let emails = developer.map(dev => dev['email']);
        let phones = developer.map(dev => dev['phone']);
        let dev_names = developer.map(dev => dev['developer_name']);
        let folder = './files/';
        let path = (0, path_1.join)(process.cwd(), folder + name);
        const workbook = XLSX.readFile(path);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const dataExcel = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        let services;
        let techn_name, techn_phone, techn_email;
        const time = Date.now();
        const today = new Date(time);
        let developerDb;
        let developers = [];
        let info = {
            "company": dataExcel[8][4] || dataExcel[8][3],
            "tecnichian_name": dataExcel[12][3],
            "tecnichian_phone": dataExcel[12][8],
            "tecnichian_email": dataExcel[12][12],
            "provider_name": dataExcel[13][3],
            "provider_phone": dataExcel[13][8],
            "provider_email": dataExcel[13][12],
            "others_name": dataExcel[14][3],
            "others_phone": dataExcel[14][8],
            "others_email": dataExcel[14][12],
            "ECRTI": dataExcel[18][3],
            "Web_Pantalla": dataExcel[20][3],
            "Web_Services": dataExcel[20][9],
            "tokenizacion": dataExcel[22][3],
            "comment": dataExcel[26][1],
            "sale_agent": dataExcel[29][3]
        };
        console.log(info);
        if (info['ECRTI'] == 'x') {
            services = 'ECRTI';
        }
        else {
            if (info['Web_Pantalla'] == 'x') {
                services = 'Web Pantalla';
            }
            else {
                if (info['Web_Services'] == 'x') {
                    services = 'Web Services';
                }
                else {
                    if (info['tokenizacion'] == 'x') {
                        services = 'Tokenizacion';
                    }
                }
            }
        }
        if (info['technician_name'] && info['technician_phone'] && info['technician_email']) {
            if (emails.includes(info['tecnichian_email']) && phones.includes(info['tecnichian_phone']) && dev_names.includes(info['tecnichian_name'])) {
            }
            else {
                maxidDeveloper++;
                techn_name = info['technician_name'];
                techn_phone = info['tecnichian_phone'];
                techn_email = info['tecnichian_email'];
                developers.push({
                    "developer_id": maxidDeveloper++,
                    "developer_name": techn_name,
                    "developer_company": maxidIntegration,
                    "certification_id": '',
                    "email": techn_email,
                    "phone": techn_phone,
                    "pos": '',
                    "program_name": '',
                    "independent": '',
                    "start_date": today.toISOString(),
                    "last_date": today.toISOString(),
                    "comment": ''
                });
            }
        }
        if (info['provider_name'] && info['provider_phone'] && info['provider_email']) {
            if (emails.includes(info['provider_email']) && phones.includes(info['provider_phone']) && dev_names.includes(info['provider_name'])) {
            }
            else {
                techn_name = info['provider_name'];
                techn_phone = info['provider_phone'];
                techn_email = info['provider_email'];
                developers.push({
                    "developer_id": maxidDeveloper++,
                    "developer_name": techn_name,
                    "developer_company": maxidIntegration,
                    "certification_id": '',
                    "email": techn_email,
                    "phone": techn_phone,
                    "pos": '',
                    "program_name": '',
                    "independent": '',
                    "start_date": today.toISOString(),
                    "last_date": today.toISOString(),
                    "comment": ''
                });
            }
        }
        if (info['others_name'] && info['others_phone'] && info['others_email']) {
            if (emails.includes(info['others_email']) && phones.includes(info['others_phone']) && dev_names.includes(info['others_name'])) {
            }
            else {
                techn_name = info['others_name'];
                techn_phone = info['others_phone'];
                techn_email = info['others_email'];
                developers.push({
                    "developer_id": ++maxidDeveloper,
                    "developer_name": techn_name,
                    "developer_company": maxidIntegration,
                    "certification_id": 0,
                    "email": techn_email,
                    "phone": techn_phone,
                    "pos": false,
                    "program_name": '',
                    "independent": false,
                    "start_date": today.toISOString(),
                    "last_date": today.toISOString(),
                    "comment": ''
                });
            }
        }
        console.log(developers);
        await this.developerModel.bulkCreate(developers).catch(err => console.log(err));
        if (company_name.includes(info['company']) && service.includes(services)) {
        }
        else {
            let companyDB = {
                "integration_id": maxidIntegration,
                "developer_id": maxidDeveloper,
                "company_name": info['company'],
                "service_type": services,
                "status": 'Dev',
                "start_lab_date": today.toISOString(),
                "cant_comercios": 1,
                "cant_pos": 0,
                "sale_agent": info['sale_agent'],
                "comment": ''
            };
            console.log(companyDB);
            await this.integrationModel.create(companyDB).catch(err => console.log(err));
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