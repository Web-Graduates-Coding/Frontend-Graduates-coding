import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES)
    },
    // {
    //     path: 'dashboard',
    //     loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    // }
];
