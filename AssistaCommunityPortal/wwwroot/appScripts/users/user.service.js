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
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:40003/users/GetAll'; // URL to web API
        this.usersUrl2 = 'http://localhost:40003/users/GetById'; // URL to web API
        this.usersUrl3 = 'http://localhost:40003/users/Create'; // URL to web API
        this.usersUrl4 = 'http://localhost:40003/users/Edit'; // URL to web API
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.usersUrl2 + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (name, username, email) {
        var body = JSON.stringify({ name: name, username: username, email: email });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.usersUrl3, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.usersUrl4, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.extractData2 = function (res) {
        var body = res.json();
        return body.data || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map