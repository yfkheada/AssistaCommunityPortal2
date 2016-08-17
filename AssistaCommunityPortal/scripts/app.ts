import {Component, OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import {Http, Headers, Response} from '@angular/http';
import { Router, ROUTER_DIRECTIVES, provideRouter, RouterConfig} from "@angular/router";

declare var System: any;
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/';
import {User} from './model';
import { UserService }   from './users/user.service';
@Component({
    selector: 'my-app',
    template: `
    <h1 style="color:#467813;" > ASP.NET Core / Angular2 and WEB API Demo </h1>
    <nav  class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                <span class="glyphicon glyphicon-sunglasses"></span>
            </a>
        </div>
      <ul class="nav navbar-nav"><li><a [routerLink]="['/']">Home</a></li></ul>
      <ul class="nav navbar-nav"><li><a [routerLink]="['/users']">Users</a></li></ul>
      <ul class="nav navbar-nav"><li><a [routerLink]="['/login']">Login</a></li></ul>
    </div>

    </nav>
<router-outlet></router-outlet>
`,
    providers: [
        UserService
    ],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    student: Array<User> = [];
    users: Array<User> = [];
    user: User;
    myName: string;
    private selectedId: number;
    private router2: Router;
    constructor(public http: Http, router: Router) {
        this.myName = "Yaser";
        this.getData();
        this.getUser();
        this.getUsers();
        this.router2 = router;
    }

    getData() {

        this.http.get('http://localhost:40003/users/GetAll')
            .map((res: Response) => res.json())
            .subscribe(
            data => { this.student = data },
            err => console.error(err),
            () => console.log('done')

            );

            
    }
    getUser() {
        this.http.get('http://localhost:40003/users/GetById/1')
            .map((res: Response) => res.json())
            .subscribe(
            data => { this.user = data },
            err => console.error(err),
            () => console.log('done')

            );
    }
    getUsers() {
        this.http.get('http://localhost:40003/users/GetAll')
            .map((res: Response) => res.json())
            .subscribe(
            data => { this.users = data },
            err => console.error(err),
            () => console.log('done')

            );
    }
    // to generate the JSON object as array
    generateArray(obj) {
        return Object.keys(obj).map((key) => { return obj[key] });
    }

    isSelected(user: User) { return user.id === this.selectedId; }

    onSelect(user: User) {
        this.router2.navigate(['/user', user.id]);
    }

    gotoUsers() { this.router2.navigate(['/']); }

}