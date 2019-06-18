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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const user_1 = __importDefault(require("../../models/users/user"));
const user_dao_1 = __importDefault(require("../../infrastructures/users/user-dao"));
let UserRepository = class UserRepository {
    constructor(userDao) {
        this.userDao = userDao;
    }
    findAll() {
        return this.userDao.findAll()
            .map(userDto => this.dtoToModel(userDto));
    }
    findById(id) {
        const userDto = this.userDao.findById(id);
        if (userDto === undefined) {
            return undefined;
        }
        return this.dtoToModel(userDto);
    }
    dtoToModel(userDto) {
        return new user_1.default(userDto.id, userDto.code, userDto.role_id);
    }
};
UserRepository = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [user_dao_1.default])
], UserRepository);
exports.default = UserRepository;
//# sourceMappingURL=user-repository.js.map