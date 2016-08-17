// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/';
import { UserService }   from './user.service';
import {User} from '../model';
import { UserDetailComponent }   from './user-detail.component';
@Component({
    providers: [UserService],
    directives: [UserDetailComponent],
    template: `
    <h2>HEROES3</h2>
    <ul class="items">
      <li *ngFor="let user of users"
        [class.selected]="isSelected(user)"
        (click)="onSelect(user)">
        <span class="badge">{{user.id}}</span> {{user.name}}
      </li>
    </ul>
New User:
<input #newName />
<input #newUserName />
<input #newEmail />
<button (click)="addUser(newName.value,newUserName.value,newEmail.value); newName.value='';newUserName.value='';newEmail.value=''">
  Add User
</button>
<div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `
})
export class UserListComponent implements OnInit, OnDestroy {
    users: User[];
    errorMessage: string;
    private selectedId: number;
    private sub: any;
    
    constructor(
        private service: UserService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.selectedId = +params['id'];
                this.service.getUsers()
                    .subscribe(users => this.users = users);
            });         
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
        this.users = null;
    }

    addUser(name: string, username: string, email: string) {
        if (!name) { return; }
        this.service.addUser(name,username,email)
            .subscribe(
            user => this.users.push(user),
            error => this.errorMessage = <any>error);
        //this.router.navigate([''], { queryParams: { name: name, username: username, email: email } });
    }

    isSelected(myUser: User) { return myUser.id === this.selectedId; }

    onSelect(myUser: User) {
        this.router.navigate(['/user', myUser.id]);
    }

    // to generate the JSON object as array
    generateArray(obj) {
        return Object.keys(obj).map((key) => { return obj[key] });
    }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/