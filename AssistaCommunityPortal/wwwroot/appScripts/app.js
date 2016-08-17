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
var http_1 = require('@angular/http');
var router_1 = require("@angular/router");
require('rxjs/Rx');
require('rxjs/operator/');
var user_service_1 = require('./users/user.service');
var AppComponent = (function () {
    function AppComponent(http, router) {
        this.http = http;
        this.student = [];
        this.users = [];
        this.myName = "Yaser";
        this.getData();
        this.getUser();
        this.getUsers();
        this.router2 = router;
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('http://localhost:40003/users/GetAll')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.student = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.http.get('http://localhost:40003/users/GetById/1')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.user = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.http.get('http://localhost:40003/users/GetAll')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.users = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    // to generate the JSON object as array
    AppComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    AppComponent.prototype.isSelected = function (user) { return user.id === this.selectedId; };
    AppComponent.prototype.onSelect = function (user) {
        this.router2.navigate(['/user', user.id]);
    };
    AppComponent.prototype.gotoUsers = function () { this.router2.navigate(['/']); };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1 style=\"color:#467813;\" > ASP.NET Core / Angular2 and WEB API Demo </h1>\n    <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <span class=\"glyphicon glyphicon-sunglasses\"></span>\n            </a>\n        </div>\n      <ul class=\"nav navbar-nav\"><li><a [routerLink]=\"['/']\">Home</a></li></ul>\n      <ul class=\"nav navbar-nav\"><li><a [routerLink]=\"['/users']\">Users</a></li></ul>\n      <ul class=\"nav navbar-nav\"><li><a [routerLink]=\"['/login']\">Login</a></li></ul>\n    </div>\n\n    </nav>\n<router-outlet></router-outlet>\n",
            providers: [
                user_service_1.UserService
            ],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map