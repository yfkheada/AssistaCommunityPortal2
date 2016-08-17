///<reference path="./../typings/globals/core-js/index.d.ts"/>
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES, provideRouter} from "@angular/router";
import { appRouterProviders } from './app.routes';
import {AppComponent} from './app';
import {APP_BASE_HREF} from '@angular/common';
import { UserService } from './users/user.service';
bootstrap(AppComponent, [HTTP_PROVIDERS, UserService, appRouterProviders,{provide: APP_BASE_HREF, useValue: '/' }]);