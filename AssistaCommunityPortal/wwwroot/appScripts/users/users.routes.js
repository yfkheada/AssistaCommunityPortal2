"use strict";
var user_list_component_1 = require('./user-list.component');
var user_detail_component_1 = require('./user-detail.component');
var app_1 = require('../app');
exports.usersRoutes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: app_1.AppComponent,
        children: [
            {
                path: 'users/details/:id',
                component: user_detail_component_1.UserDetailComponent
            },
            {
                path: 'users/:id',
                component: user_detail_component_1.UserDetailComponent
            },
            {
                path: '',
                component: user_list_component_1.UserListComponent
            }
        ]
    }
];
//# sourceMappingURL=users.routes.js.map