import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutAuthComponent } from './layout-auth/layout-auth.component';

export const AUTH_ROUTES: Routes = [
    {
        path: '', component:LayoutAuthComponent, children:[
            {path: '', component:LoginComponent},
            {path: 'register', component:RegisterComponent},
        ]
    }
];