import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectToGarmentPrintingPageRoutingModule } from './direct-to-garment-printing-routing.module';

import { DirectToGarmentPrintingPage } from './direct-to-garment-printing.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel/';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CarouselModule.forRoot(),
    IonicModule,
    DirectToGarmentPrintingPageRoutingModule
  ],
  declarations: [DirectToGarmentPrintingPage]
})
export class DirectToGarmentPrintingPageModule {}
