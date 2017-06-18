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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this._url = "http://jsonplaceholder.typicode.com/users";
    }
    getUsers() {
        var url = this._url;
        return this._http.get(url)
            .map(res => res.json());
    }
    getUser(userId) {
        return this._http.get(this.getUserUrl(userId))
            .map(res => res.json());
    }
    addUser(user) {
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json());
    }
    updateUser(user) {
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(res => res.json());
    }
    deleteUser(userId) {
        return this._http.delete(this.getUserUrl(userId))
            .map(res => res.json());
    }
    getUserUrl(userId) {
        return this._url + "/" + userId;
    }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map