import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

    constructor(private http: Http) { }

    getCommentList(counter) {
        let promise = new Promise((resolve, reject) => {
            var url = "https://jsonplaceholder.typicode.com/posts/" +counter+ "/comments";
            this.http.get(url).toPromise().then(
                res => {

                    resolve(res.json());
                }, error => {
                    reject(error);
                });
        });
        return promise;
    }

}
