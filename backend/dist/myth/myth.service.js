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
exports.MythService = void 0;
const mongoose_1 = require("mongoose");
const myth_schema_1 = require("./schemas/myth.schema");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let MythService = class MythService {
    constructor(mythModel) {
        this.mythModel = mythModel;
    }
    async listarMyth() {
        const myths = await this.mythModel.find({});
        const total = await this.mythModel.find({}).count();
        return { message: `${total} lendas encontradas`, myths };
    }
    async createMyth(myth, user_id) {
        const createdMyth = new this.mythModel({
            id_autor: user_id,
            titulo: myth.titulo,
            texto: myth.texto,
        });
        return createdMyth.save();
    }
    async findMyth(titulo) {
        return this.mythModel.findOne({ titulo }).exec();
    }
    async deleteMyth(titulo) {
        return this.mythModel.deleteOne({ titulo }).exec();
    }
};
exports.MythService = MythService;
exports.MythService = MythService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(myth_schema_1.Myth.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], MythService);
//# sourceMappingURL=myth.service.js.map