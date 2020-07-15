import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenPrintingPage } from './screen-printing.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenPrintingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenPrintingPageRoutingModule {}
