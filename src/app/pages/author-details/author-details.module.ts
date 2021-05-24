import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorDetailsPageRoutingModule } from './author-details-routing.module';
import { AuthorDetailsPage } from './author-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AuthorDetailsPageRoutingModule
  ],
  declarations: [AuthorDetailsPage],
  providers: [],
  exports: []
})
export class AuthorDetailsPageModule { }
