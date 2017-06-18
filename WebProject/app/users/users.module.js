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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const user_form_component_1 = require("./user-form.component");
const users_component_1 = require("./users.component");
const user_service_1 = require("./user.service");
const prevent_unsaved_changes_guard_service_1 = require("../prevent-unsaved-changes-guard.service");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule,
            http_1.HttpModule
        ],
        declarations: [
            user_form_component_1.UserFormComponent,
            users_component_1.UsersComponent
        ],
        exports: [
            user_form_component_1.UserFormComponent,
            users_component_1.UsersComponent
        ],
        providers: [
            user_service_1.UserService,
            prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map