import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard';
import { SearchItemComponent } from './search-item-component/search-item-component';
import { ListItemComponent } from './list-item-component/list-item-component';

export const routes: Routes = [
    {
        path:'', component: DashboardComponent, title: 'Welcome'
    },
    {
        path: 'search', component: SearchItemComponent, title: 'Search for an Item'
    },
    {
        path: 'list', component: ListItemComponent, title: 'List all Itens'
    },
    {
        path: '**', component: ListItemComponent, title: 'List all Itens'
    }
];
