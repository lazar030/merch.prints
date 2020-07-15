import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'screen-printing',
    loadChildren: () =>
      import('./pages/printing/screen-printing/screen-printing.module').then(
        m => m.ScreenPrintingPageModule
      )
  },
  {
    path: 'direct-to-garment-printing',
    loadChildren: () => import('./pages/printing/direct-to-garment-printing/direct-to-garment-printing.module')
        .then( m => m.DirectToGarmentPrintingPageModule)
  },
  {
    path: 'dye-sublimation',
    loadChildren: () => import('./pages/printing/dye-sublimation/dye-sublimation.module').then( m => m.DyeSublimationPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms-of-service/terms-of-service.module').then( m => m.TermsOfServicePageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'pricing',
    loadChildren: () => import('./pages/pricing/pricing.module').then( m => m.PricingPageModule)
  },
  {
    path: 'band-merch',
    loadChildren: () => import('./pages/band-merch/band-merch.module').then( m => m.BandMerchPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
