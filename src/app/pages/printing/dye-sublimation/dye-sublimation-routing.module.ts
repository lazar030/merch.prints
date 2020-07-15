import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DyeSublimationPage } from './dye-sublimation.page';

const routes: Routes = [
  {
    path: '',
    component: DyeSublimationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyeSublimationPageRoutingModule {}
