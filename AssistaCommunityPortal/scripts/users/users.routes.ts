import { RouterConfig }          from '@angular/router';
import { UserListComponent }     from './user-list.component';
import { UserDetailComponent }   from './user-detail.component';
import {AppComponent} from '../app';
export const usersRoutes: RouterConfig = [
    {
        path: '', 
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: AppComponent,
        children: [
            {
                path: 'users/details/:id',
                component: UserDetailComponent
            },
            {
                path: 'users/:id',
                component: UserDetailComponent
            },
            {
                path: '',
                component: UserListComponent
            }
        ]
    }

];
