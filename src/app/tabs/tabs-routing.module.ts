import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
        {
        path: 'tab2',
        loadChildren: () => import('../searchbar/searchbar.module').then(m => m.SearchbarPageModule)
      }, {
        path: 'tab3',
        loadChildren: () => import('../filter/filter.module').then(m => m.FilterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
