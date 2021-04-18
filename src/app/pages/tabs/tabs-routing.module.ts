import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AvatarPageModule } from '../avatar/avatar.module';
import { ListPageModule } from '../list/list.module';
import { InfiPageModule } from '../infi/infi.module';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/tabs/account',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path:'account',
        loadChildren:()=>import('../avatar/avatar.module').then ( m => AvatarPageModule)
      },
      {
        path:'contact',
        loadChildren:()=>import('../list/list.module').then(m=> ListPageModule)
      },
      {
        path:'setting',
        loadChildren:()=>import('../infi/infi.module').then(m => InfiPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
// list
// infinite scrool