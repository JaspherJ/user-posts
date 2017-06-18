"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const shared_module_1 = require("../shared/shared.module");
const http_1 = require("@angular/http");
const posts_component_1 = require("./posts.component");
const post_service_1 = require("./post.service");
const user_service_1 = require("../users/user.service");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            common_1.CommonModule,
            shared_module_1.SharedModule
        ],
        declarations: [
            posts_component_1.PostsComponent
        ],
        exports: [
            posts_component_1.PostsComponent
        ],
        providers: [
            post_service_1.PostService,
            user_service_1.UserService
        ]
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map