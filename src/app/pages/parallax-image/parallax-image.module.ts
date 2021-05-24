import { ParallaxHeaderDirective } from './directive/parallax-header.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParallaxImagePageRoutingModule } from './parallax-image-routing.module';

import { ParallaxImagePage } from './parallax-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParallaxImagePageRoutingModule
  ],
  declarations: [ParallaxImagePage, ParallaxHeaderDirective]
})
export class ParallaxImagePageModule {}
