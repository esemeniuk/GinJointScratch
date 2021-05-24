import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpiritDetailsPageRoutingModule } from './spirit-details-routing.module';
import { SpiritDetailsPage } from './spirit-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
        SpiritDetailsPageRoutingModule
  ],
    declarations: [SpiritDetailsPage],
  providers: [],
  exports: []
})
export class SpiritDetailsModule { }
