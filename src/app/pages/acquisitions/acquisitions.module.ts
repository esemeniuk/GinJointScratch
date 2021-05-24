 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AcquisitionsPageRoutingModule } from './acquisitions-routing.module';
import { AcquisitionsPage } from './acquisitions.page';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AcquisitionsPageRoutingModule,
        IonicRatingComponentModule,
        IonicSelectableModule
  ],
    declarations: [AcquisitionsPage],
  providers: [],
  exports: []
})
export class AcquisitionsPageModule { }
