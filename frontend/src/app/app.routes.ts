import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListeComponent } from './components/liste/liste.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'liste',
        component: ListeComponent,
    },
    {
        path: '**',
        component: HomeComponent,
    },
];
