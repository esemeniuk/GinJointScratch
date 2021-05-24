import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritsPage } from './spirits.page';

const routes: Routes = [
  {
    path: '',
    component: SpiritsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpiritsPageRoutingModule {}