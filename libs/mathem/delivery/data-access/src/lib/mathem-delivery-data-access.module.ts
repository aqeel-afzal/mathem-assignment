import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DeliveryEffects } from './+state/delivery.effects';
import { DELIVERY_FEATURE_KEY } from './+state/delivery.entity';
import { deliveryReducer } from './+state/delivery.reducer';
import { MathemDeliveryService } from './mathem-delivery/mathem-delivery.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(DELIVERY_FEATURE_KEY, deliveryReducer),
    EffectsModule.forFeature([DeliveryEffects]),
  ],
  providers: [MathemDeliveryService],
})
export class MathemDeliveryDataAccessModule {}
