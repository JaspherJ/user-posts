import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    url = "https://jsonplaceholder.typicode.com/posts";
    constructor(private _http: Http) {

    }

    getposts(userId?) {
        var url = this.url;
        if (userId) {
            url += "?userId=" + userId;
        }
        return this._http.get(url).map(x => x.json());
    }

    getComments(id) {
        return this._http.get(this.url + "/" + id+"/"+ "comments").map(x => x.json());
    }
}