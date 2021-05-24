import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BookPageRoutingModule } from './book-routing.module';
import { BookPage } from './book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPageRoutingModule
  ],
  declarations: [BookPage],
  providers: [],
  exports: []
})
export class BookPageModule { }
