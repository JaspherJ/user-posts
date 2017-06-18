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
const user_service_1 = require("./user.service");
let UsersComponent = class UsersComponent {
    constructor(_service) {
        this._service = _service;
    }
    ngOnInit() {
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }
    deleteUser(user) {
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user);
            // Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);
            this._service.deleteUser(user.id)
                .subscribe(null, err => {
                alert("Could not delete the user.");
                // Revert the view back to its original state
                // by putting the user object at the index
                // it used to be.
                this.users.splice(index, 0, user);
            });
        }
    }
};
UsersComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/users.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map