import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'create',
                loadComponent: () => import('./components/create/create.component').then(c => c.CreateComponent)
            }
        ]
    }
];
