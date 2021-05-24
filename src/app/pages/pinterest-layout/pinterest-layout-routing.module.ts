import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinterestLayoutPage } from './pinterest-layout.page';

const routes: Routes = [
  {
    path: '',
    component: PinterestLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinterestLayoutPageRoutingModule {}
