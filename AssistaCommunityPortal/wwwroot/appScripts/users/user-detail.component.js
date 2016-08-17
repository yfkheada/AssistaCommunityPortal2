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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var UserDetailComponent = (function () {
    function UserDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.service.getUser(id).toPromise().then(function (user) { return _this.user = user; });
        });
        //let id = +this.route.snapshot.params['id'];
        //this.service.getUser(id).toPromise().then(user => this.user = user);
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailComponent.prototype.gotoUsers = function () {
        var userId = this.user ? this.user.id : null;
        // Pass along the user id if available
        // so that the HeroList component can select that user.
        this.router.navigate([''], { queryParams: { id: userId, foo: 'foo' } });
        //this.router.navigate(['users', { queryParams: { id: userId, foo: 'foo' } }]);
    };
    UserDetailComponent.prototype.updateUser = function () {
        var _this = this;
        if (!this.user.name) {
            return;
        }
        this.service.updateUser(this.user)
            .subscribe(function (error) { return _this.errorMessage = error; });
        this.gotoUsers();
        //this.router.navigate([''], { queryParams: { name: name, username: username, email: email } });
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'userDetailComponent',
            template: "\n  <h2>My User-2</h2>\n  <div *ngIf=\"user\">\n    <h3>\"{{user.name}}\"</h3>\n    <div>\n      <label>User Name: </label>\"{{user.username}}\"</div>\n    <div>\n      <label>Id: </label>{{user.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"user.name\" placeholder=\"name\"/>\n    </div>\n\n      <button (click)=\"gotoUsers()\">Back</button>\n<button (click)=\"updateUser();\">\n  Add User\n</button>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map