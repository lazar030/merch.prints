import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BandMerchPageRoutingModule } from './band-merch-routing.module';

import { BandMerchPage } from './band-merch.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule.forRoot(),
    FormsModule,
    IonicModule,
    BandMerchPageRoutingModule
  ],
  declarations: [BandMerchPage]
})
export class BandMerchPageModule {}
