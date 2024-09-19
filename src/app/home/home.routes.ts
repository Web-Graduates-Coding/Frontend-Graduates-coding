import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';

export const HOME_ROUTES: Routes = [
    {
        path: '', component:HomePageComponent,
    },
    {
        path: 'userpage', component:UserPageComponent,
    },
];