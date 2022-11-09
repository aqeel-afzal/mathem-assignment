import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { DeliveryDateEntity, DeliveryTimeEntity } from './delivery.models';

export const DeliveryActions = createActionGroup({
  source: 'Delivery',
  events: {
    'Load Delivery Dates': emptyProps(),
    'Load Delivery Dates Success': props<{
      dates: Array<DeliveryDateEntity>;
    }>(),
    'Load Delivery Dates Failure': props<{ error: Error }>(),

    'Load Delivery Times': props<{ date: string }>(),
    'Load Delivery Times Success': props<{
      times: Array<DeliveryTimeEntity>;
    }>(),
    'Load Delivery Times Failure': props<{ error: Error }>(),

    'Get In Home Delivery': emptyProps(),
    'Set In Home Delivery': props<{ inHomeDelivery: boolean }>(),

    'Get Selected Time': emptyProps(),
    'Set Selected Time': props<{ selectedTime: DeliveryTimeEntity }>(),
  },
});
