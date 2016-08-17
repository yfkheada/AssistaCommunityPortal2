"use strict";
///<reference path="./../typings/globals/core-js/index.d.ts"/>
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_1 = require('./app');
var common_1 = require('@angular/common');
var user_service_1 = require('./users/user.service');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, user_service_1.UserService, app_routes_1.appRouterProviders, { provide: common_1.APP_BASE_HREF, useValue: '/' }]);
//# sourceMappingURL=boot.js.map