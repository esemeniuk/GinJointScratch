import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcquisitionsPage } from './acquisitions.page';

const routes: Routes = [
  {
    path: '',
        component: AcquisitionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcquisitionsPageRoutingModule {}