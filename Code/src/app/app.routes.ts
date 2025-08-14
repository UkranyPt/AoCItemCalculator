import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard';
import { SearchItemComponent } from './search-item-component/search-item-component';
import { ListItemComponent } from './list-item-component/list-item-component';
import { BuildComponent } from './build-component/build-component';

export const routes: Routes = [
    {
        path:'', redirectTo: '/home', pathMatch: 'full' 
    },
    {
        path:'home', component: DashboardComponent, title: 'Welcome'
    },
    {
        path:'build', component: BuildComponent, title: 'Build your set'
    },
    {
        path: 'search', component: SearchItemComponent, title: 'Search for an Item'
    },
    {
        path: 'list', component: ListItemComponent, title: 'List all Itens'
    },
    {
        path: '**', redirectTo: '/home'
    }
];
