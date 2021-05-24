import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParallaxImagePage } from './parallax-image.page';

const routes: Routes = [
  {
    path: '',
    component: ParallaxImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParallaxImagePageRoutingModule {}
