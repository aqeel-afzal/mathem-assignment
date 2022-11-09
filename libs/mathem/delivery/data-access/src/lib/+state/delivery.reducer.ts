import { DeliveryActions } from './delivery.actions';
import { Action, createReducer, on } from '@ngrx/store';
import {
  deliveryDateAdapter,
  DeliveryState,
  deliveryTimeAdapter,
  initialDeliveryState,
} from './delivery.entity';

const reducer = createReducer(
  initialDeliveryState,

  // Date
  on(DeliveryActions.loadDeliveryDates, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DeliveryActions.loadDeliveryDatesSuccess, (state, { dates }) => ({
    ...state,
    dates: deliveryDateAdapter.setAll(dates, state.dates),
  })),
  on(DeliveryActions.loadDeliveryDatesFailure, (state, { error }) => ({
    ...state,
    error: error.message,
  })),

  // Time
  on(DeliveryActions.loadDeliveryTimes, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DeliveryActions.loadDeliveryTimesSuccess, (state, { times }) => ({
    ...state,
    times: deliveryTimeAdapter.setAll(times, state.times),
  })),
  on(DeliveryActions.loadDeliveryTimesFailure, (state, { error }) => ({
    ...state,
    error: error.message,
  })),

  // In Home Delivery
  on(DeliveryActions.setInHomeDelivery, (state, { inHomeDelivery }) => ({
    ...state,
    inHomeDelivery,
  })),

  // Selected Time
  on(DeliveryActions.setSelectedTime, (state, { selectedTime }) => ({
    ...state,
    selectedTime,
  }))
);

export function deliveryReducer(
  state: DeliveryState | undefined,
  action: Action
) {
  return reducer(state, action);
}
