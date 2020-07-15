import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectToGarmentPrintingPage } from './direct-to-garment-printing.page';

const routes: Routes = [
  {
    path: '',
    component: DirectToGarmentPrintingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectToGarmentPrintingPageRoutingModule {}
