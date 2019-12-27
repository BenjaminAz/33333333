import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoViewPageRoutingModule } from './info-view-routing.module';

import { InfoViewPage } from './info-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoViewPageRoutingModule
  ],
  declarations: [InfoViewPage]
})
export class InfoViewPageModule {}
