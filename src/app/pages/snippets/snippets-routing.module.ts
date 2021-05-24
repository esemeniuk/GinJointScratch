import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SnippetsPage } from './snippets.page';

const routes: Routes = [
  {
    path: '',
    component: SnippetsPage
  },
  {
    path: 'pinterest-layout',
    loadChildren: () => import('../pinterest-layout/pinterest-layout.module').then( m => m.PinterestLayoutPageModule)
  },{
    path: 'virtual-scroll',
    loadChildren: () => import('../virtual-scroll/virtual-scroll.module').then( m => m.VirtualScrollPageModule)
  },{
    path: 'parallax-image',
    loadChildren: () => import('../parallax-image/parallax-image.module').then( m => m.ParallaxImagePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnippetsPageRoutingModule {}
