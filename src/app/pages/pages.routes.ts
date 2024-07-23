import { Routes } from '@angular/router';


export const adminRoutes: Routes = [ 
    { path: '', loadComponent: () => import('./familias/familias.component').then((c) => c.FamiliasComponent) },
    { path: ':id', loadComponent: () => import('./familias/familias.component').then((c) => c.FamiliasComponent) },
];