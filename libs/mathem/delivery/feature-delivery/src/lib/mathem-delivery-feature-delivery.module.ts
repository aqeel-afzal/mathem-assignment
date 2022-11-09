import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MathemDeliveryDataAccessModule } from '@mathem-assignment/mathem/delivery/data-access';
import { MathemDeliverySharedUiFeatureDateComponent } from '@mathem-assignment/mathem/delivery/shared/ui/feature-date';
import { MathemDeliverySharedUiFeatureTimeComponent } from '@mathem-assignment/mathem/delivery/shared/ui/feature-time';
import {
  ButtonComponent,
  CheckboxComponent
} from '@mathem-assignment/mathem/shared/ui';
import { FeatureDeliveryComponent } from './feature-delivery/feature-delivery.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: FeatureDeliveryComponent }]),
    MathemDeliverySharedUiFeatureDateComponent,
    MathemDeliverySharedUiFeatureTimeComponent,
    CheckboxComponent,
    ButtonComponent,
    MathemDeliveryDataAccessModule,
  ],
  declarations: [FeatureDeliveryComponent],
})
export class MathemDeliveryFeatureDeliveryModule {}
