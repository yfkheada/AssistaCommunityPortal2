import { Injectable,Inject } from '@angular/core';
import {User} from '../model'; 
import {Http, Response} from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Router, ROUTER_DIRECTIVES, provideRouter, RouterConfig} from "@angular/router";
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

    constructor(private http: Http) { }
    private usersUrl = 'http://localhost:40003/users/GetAll';  // URL to web API
    private usersUrl2 = 'http://localhost:40003/users/GetById';  // URL to web API
    private usersUrl3 = 'http://localhost:40003/users/Create';  // URL to web API
    private usersUrl4 = 'http://localhost:40003/users/Edit';  // URL to web API
    getUsers(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getUser(id: number | string): Observable<User> {
        return this.http.get(this.usersUrl2 + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    }
    addUser(name: string, username: string, email: string): Observable<User> {
        let body = JSON.stringify({ name, username, email  });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.usersUrl3, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    updateUser(user: User): Observable<User> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.usersUrl4, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private extractData2(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    //constructor(public http: Http, router: Router) {
    //    this.myName = "Yaser";
    //    this.getData();
    //}

    //getData() {

    //    this.http.get('http://localhost:40003/users/GetAll')
    //        .map((res: Response) => res.json())
    //        .subscribe(
    //        data => { this.student = data },
    //        err => console.error(err),
    //        () => console.log('done')

    //        );


    //}
    //// to generate the JSON object as array
    //generateArray(obj) {
    //    return Object.keys(obj).map((key) => { return obj[key] });
    //}

}