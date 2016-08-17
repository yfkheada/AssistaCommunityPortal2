import { provideRouter, RouterConfig } from '@angular/router';
import { UserListComponent }     from './users/user-list.component';
import { UserDetailComponent }   from './users/user-detail.component';
import {AppComponent} from './app';
import { usersRoutes }       from './users/users.routes';

//export const routes: RouterConfig = [
//    ...usersRoutes
//];
const routes: RouterConfig = [
    { path: 'users', component: UserListComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: '', component: UserListComponent }
];

export const appRouterProviders = [
    provideRouter(routes)
];