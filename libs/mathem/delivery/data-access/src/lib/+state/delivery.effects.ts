import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { MathemDeliveryService } from '../mathem-delivery/mathem-delivery.service';
import { DeliveryActions } from './delivery.actions';
import { DeliveryTimeEntity } from './delivery.models';

@Injectable()
export class DeliveryEffects {
  initDates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.loadDeliveryDates),
      fetch({
        run: () => {
          return this.deliveryService.getDates().pipe(
            map((dates: Array<string>) =>
              DeliveryActions.loadDeliveryDatesSuccess({
                dates: dates.map((date) => ({
                  id: date,
                  value: date,
                })),
              })
            )
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return DeliveryActions.loadDeliveryDatesFailure({ error });
        },
      })
    )
  );

  initTimes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeliveryActions.loadDeliveryTimes),
      fetch({
        run: (action) => {
          return this.deliveryService.getTimes(action.date).pipe(
            map((times: Array<DeliveryTimeEntity>) =>
              DeliveryActions.loadDeliveryTimesSuccess({
                times,
              })
            )
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return DeliveryActions.loadDeliveryTimesFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly deliveryService: MathemDeliveryService
  ) {}
}
