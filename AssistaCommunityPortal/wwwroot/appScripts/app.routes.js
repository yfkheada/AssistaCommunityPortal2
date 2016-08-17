"use strict";
var router_1 = require('@angular/router');
var user_list_component_1 = require('./users/user-list.component');
var user_detail_component_1 = require('./users/user-detail.component');
//export const routes: RouterConfig = [
//    ...usersRoutes
//];
var routes = [
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent },
    { path: '', component: user_list_component_1.UserListComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map