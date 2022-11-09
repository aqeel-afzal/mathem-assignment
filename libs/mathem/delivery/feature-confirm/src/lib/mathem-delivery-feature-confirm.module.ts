import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@mathem-assignment/mathem/shared/ui';
import { FeatureConfirmComponent } from './feature-confirm/feature-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeatureConfirmComponent }]),
    ButtonComponent,
  ],
  declarations: [FeatureConfirmComponent],
})
export class MathemDeliveryFeatureConfirmModule {}
