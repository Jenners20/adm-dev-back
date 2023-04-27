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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let DeveloperModel = class DeveloperModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
    }),
    __metadata("design:type", Number)
], DeveloperModel.prototype, "developer_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], DeveloperModel.prototype, "developer_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], DeveloperModel.prototype, "developer_company", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.INTEGER
    }),
    __metadata("design:type", Number)
], DeveloperModel.prototype, "certification_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], DeveloperModel.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], DeveloperModel.prototype, "phone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BOOLEAN
    }),
    __metadata("design:type", Boolean)
], DeveloperModel.prototype, "pos", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], DeveloperModel.prototype, "program_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BOOLEAN
    }),
    __metadata("design:type", Boolean)
], DeveloperModel.prototype, "independent", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", String)
], DeveloperModel.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", String)
], DeveloperModel.prototype, "last_date", void 0);
DeveloperModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'developer',
        timestamps: false
    })
], DeveloperModel);
exports.DeveloperModel = DeveloperModel;
//# sourceMappingURL=developer.model.js.map