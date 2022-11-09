import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  DeliveryDateEntity,
  DeliveryEntity,
  DeliveryTimeEntity
} from './delivery.models';

export const DELIVERY_FEATURE_KEY = 'delivery';

export interface DeliveryState extends EntityState<DeliveryEntity> {
  loaded: boolean;
  error?: string | null;

  dates: EntityState<DeliveryDateEntity>;
  times: EntityState<DeliveryTimeEntity>;

  inHomeDelivery?: boolean;
  selectedTime?: DeliveryTimeEntity;
}

export interface DeliveryPartialState {
  readonly [DELIVERY_FEATURE_KEY]: DeliveryState;
}

export const deliveryDateAdapter: EntityAdapter<DeliveryDateEntity> =
  createEntityAdapter<DeliveryDateEntity>();

export const deliveryTimeAdapter: EntityAdapter<DeliveryTimeEntity> =
  createEntityAdapter<DeliveryTimeEntity>({
    selectId: (time) => time.deliveryTimeId,
  });

export const deliveryAdapter: EntityAdapter<DeliveryEntity> =
  createEntityAdapter<DeliveryEntity>();

export const initialDeliveryState: DeliveryState =
  deliveryAdapter.getInitialState({
    loaded: false,

    dates: deliveryDateAdapter.getInitialState(),
    times: deliveryTimeAdapter.getInitialState(),
  });

export const getInHomeDelivery = (state: DeliveryState) => state.inHomeDelivery;
export const getSelectedTime = (state: DeliveryState) => state.selectedTime;
export const selectDateState = (state: DeliveryState) => state.dates;
export const selectTimeState = (state: DeliveryState) => state.times;
export const { selectAll: selectAllDates } = deliveryDateAdapter.getSelectors();
export const { selectAll: selectAllTimes } = deliveryTimeAdapter.getSelectors();
