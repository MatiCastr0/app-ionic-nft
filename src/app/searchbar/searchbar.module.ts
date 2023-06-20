import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SearchbarPage } from './searchbar.page';

import { SearchbarPageRoutingModule } from './searchbar-routing.module';

import { SearchBarComponent } from '../search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchbarPageRoutingModule
  ],
  declarations: [SearchbarPage, SearchBarComponent]
})
export class SearchbarPageModule {}
