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
const post_service_1 = require("./post.service");
require("rxjs/add/operator/map");
const user_service_1 = require("../users/user.service");
let PostsComponent = class PostsComponent {
    constructor(_service, _userService) {
        this._service = _service;
        this._userService = _userService;
        this.postsList = [];
        this.users = [];
        this.postsLoading = true;
        this.post = {};
        this.comments = [];
        this.display = false;
    }
    ngOnInit() {
        this._service.getposts().subscribe(posts => {
            this.postsList = posts;
            this.postsLoading = false;
        });
        this._userService.getUsers().subscribe(x => this.users = x);
    }
    getPostsBody(posts) {
        this.post = posts;
        this.display = true;
        this._service.getComments(posts.id).subscribe(x => this.comments = x);
    }
    reloadPosts(userId) {
        this._service.getposts(userId.userId).subscribe(x => this.postsList = x);
        console.log(this.postsList);
    }
};
PostsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/posts/post.component.html'
    }),
    __metadata("design:paramtypes", [post_service_1.PostService, user_service_1.UserService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map