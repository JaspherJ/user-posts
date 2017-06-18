
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpModule } from '@angular/http';

import { PostsComponent } from './posts.component';
import { PostService } from './post.service';
import { UserService } from '../users/user.service';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        PostsComponent
    ],
    exports: [
        PostsComponent
    ],
    providers: [
        PostService,
        UserService
    ]
})
export class PostsModule {
}