import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpiritDetailsPage } from './spirit-details.page';

const routes: Routes = [
    {
        path: '',
        component: SpiritDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpiritDetailsPageRoutingModule {}