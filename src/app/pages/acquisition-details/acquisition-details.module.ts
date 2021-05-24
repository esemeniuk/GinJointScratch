import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcquisitionDetailsPageRoutingModule } from './acquisition-details-routing.module';
import { AcquisitionDetailsPage } from './acquisition-details.page';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
    imports:
        [   CommonModule,
            FormsModule,
            ReactiveFormsModule,
            IonicModule,
            AcquisitionDetailsPageRoutingModule,
            IonicRatingComponentModule,
            IonicSelectableModule        ],
    declarations:
        [   AcquisitionDetailsPage],
  providers: [],
  exports: []
})
export class AcquisitionDetailsPageModule { }
