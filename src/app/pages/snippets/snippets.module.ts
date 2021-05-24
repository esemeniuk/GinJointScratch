import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnippetsPageRoutingModule } from './snippets-routing.module';

import { SnippetsPage } from './snippets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnippetsPageRoutingModule
  ],
  declarations: [SnippetsPage]
})
export class SnippetsPageModule {}
