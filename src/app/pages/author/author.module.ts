import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthorPageRoutingModule } from './author-routing.module';
import { AuthorPage } from './author.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorPageRoutingModule
  ],
  declarations: [AuthorPage],
  providers: [],
  exports: []
})
export class AuthorPageModule { }
