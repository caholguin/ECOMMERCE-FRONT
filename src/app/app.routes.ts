import { Routes } from '@angular/router';

export const routes: Routes = [  
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'familias', loadComponent: () => import('./pages/familias/familias.component').then((c) => c.FamiliasComponent) },
    { path: 'familias/:id', loadComponent: () => import('./pages/familias/familias.component').then((c) => c.FamiliasComponent) },
];
