import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinterestLayoutPageRoutingModule } from './pinterest-layout-routing.module';

import { PinterestLayoutPage } from './pinterest-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinterestLayoutPageRoutingModule
  ],
  declarations: [PinterestLayoutPage]
})
export class PinterestLayoutPageModule {}
