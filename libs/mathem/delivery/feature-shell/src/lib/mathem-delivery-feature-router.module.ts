import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'delivery',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@mathem-assignment/mathem/delivery/feature-delivery').then(
            (m) => m.MathemDeliveryFeatureDeliveryModule
          ),
      },
      {
        path: 'confirm',
        loadChildren: () =>
          import('@mathem-assignment/mathem/delivery/feature-confirm').then(
            (m) => m.MathemDeliveryFeatureConfirmModule
          ),
      },
    ],
  },
  { path: '', redirectTo: '/delivery', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathemDeliveryFeatureRouterModule {}
