import { Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { PackComponent } from '../features/pack/pack.component';

export const routes: Routes = [
    {
        'path': '',
        component: HomeComponent
    },
    {
        'path': 'pack',
        component: PackComponent
    }
];
