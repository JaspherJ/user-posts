import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import 'rxjs/add/operator/map';
import { UserService } from '../users/user.service';


@Component({
   
    templateUrl: 'app/posts/post.component.html'
})

export class PostsComponent implements OnInit{
    postsList = [];
    users = [];
    postsLoading = true;
    post = {};
    comments = [];
    display = false;
    constructor(public _service: PostService, private _userService: UserService) {

    }

    ngOnInit() {
        this._service.getposts().subscribe(
            posts =>{
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


}