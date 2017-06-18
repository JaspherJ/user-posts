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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const user_service_1 = require("./user.service");
const user_1 = require("./user");
let UserFormComponent = class UserFormComponent {
    constructor(fb, _router, _route, _userService) {
        this._router = _router;
        this._route = _route;
        this._userService = _userService;
        this.user = new user_1.User();
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    ngOnInit() {
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];
            this.title = id ? "Edit User" : "New User";
            if (!id)
                return;
            this._userService.getUser(id)
                .subscribe(user => this.user = user, response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            });
        });
    }
    save() {
        var result;
        if (this.user.id)
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.addUser(this.user);
        result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['users']);
        });
    }
};
UserFormComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/user-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        user_service_1.UserService])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map