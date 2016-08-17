import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES }       from '@angular/router';
import {User} from '../model';
import { UserService } from './user.service';
import { NgFor,NgIf } from '@angular/common';
@Component({
    selector: 'userDetailComponent',
    template: `
  <h2>My User-2</h2>
  <div *ngIf="user">
    <h3>"{{user.name}}"</h3>
    <div>
      <label>User Name: </label>"{{user.username}}"</div>
    <div>
      <label>Id: </label>{{user.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="user.name" placeholder="name"/>
    </div>

      <button (click)="gotoUsers()">Back</button>
<button (click)="updateUser();">
  Add User
</button>
  </div>
  `
})
export class UserDetailComponent implements OnInit, OnDestroy {
    user: User;
    errorMessage: string;
    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: UserService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.service.getUser(id).toPromise().then(user => this.user = user);
        });
        //let id = +this.route.snapshot.params['id'];
        //this.service.getUser(id).toPromise().then(user => this.user = user);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    gotoUsers() {
        let userId = this.user ? this.user.id : null;
        // Pass along the user id if available
        // so that the HeroList component can select that user.
        this.router.navigate([''], { queryParams: { id: userId, foo: 'foo' } });
        //this.router.navigate(['users', { queryParams: { id: userId, foo: 'foo' } }]);
    }

    updateUser() {
        if (!this.user.name) { return; }
        this.service.updateUser(this.user)
            .subscribe(
            
            error => this.errorMessage = <any>error);
        this.gotoUsers();
        //this.router.navigate([''], { queryParams: { name: name, username: username, email: email } });
    }
}
