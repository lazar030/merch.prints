import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenPrintingPageRoutingModule } from './screen-printing-routing.module';

import { ScreenPrintingPage } from './screen-printing.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    ScreenPrintingPageRoutingModule
  ],
  declarations: [ScreenPrintingPage]
})
export class ScreenPrintingPageModule {}
