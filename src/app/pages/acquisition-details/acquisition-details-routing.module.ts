import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcquisitionDetailsPage } from './acquisition-details.page';

const routes: Routes = [
  {
    path: '',
        component: AcquisitionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcquisitionDetailsPageRoutingModule {}