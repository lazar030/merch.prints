import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DyeSublimationPageRoutingModule } from './dye-sublimation-routing.module';

import { DyeSublimationPage } from './dye-sublimation.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CarouselModule.forRoot(),
    IonicModule,
    DyeSublimationPageRoutingModule
  ],
  declarations: [DyeSublimationPage]
})
export class DyeSublimationPageModule {}
