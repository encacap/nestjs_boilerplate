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
exports.LoginResponseEntity = void 0;
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("../user/user.entity");
class LoginResponseEntity {
    user;
    authToken;
    constructor(user, authToken) {
        this.user = user;
        this.authToken = authToken;
    }
}
__decorate([
    (0, class_transformer_1.Type)(() => user_entity_1.UserEntity),
    __metadata("design:type", user_entity_1.UserEntity)
], LoginResponseEntity.prototype, "user", void 0);
exports.LoginResponseEntity = LoginResponseEntity;
//# sourceMappingURL=loginResponse.entity.js.map