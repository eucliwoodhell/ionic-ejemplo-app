import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfiPage } from './infi.page';

const routes: Routes = [
  {
    path: '',
    component: InfiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfiPageRoutingModule {}
