import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PricingPageRoutingModule } from './pricing-routing.module';

import { PricingPage } from './pricing.page';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PricingPageRoutingModule
  ],
  declarations: [PricingPage]
})
export class PricingPageModule {}
