import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandMerchPage } from './band-merch.page';

const routes: Routes = [
  {
    path: '',
    component: BandMerchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BandMerchPageRoutingModule {}
