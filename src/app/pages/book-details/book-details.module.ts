import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailsPageRoutingModule } from './book-details-routing.module';
import { BookDetailsPage } from './book-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BookDetailsPageRoutingModule
  ],
  declarations: [BookDetailsPage],
  providers: [],
  exports: []
})
export class BookDetailsPageModule { }
