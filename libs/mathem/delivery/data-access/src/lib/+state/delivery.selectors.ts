import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDeliveryEntity from './delivery.entity';

export const getDeliveryState =
  createFeatureSelector<fromDeliveryEntity.DeliveryState>(
    fromDeliveryEntity.DELIVERY_FEATURE_KEY
  );

const selectDatesState = createSelector(
  getDeliveryState,
  fromDeliveryEntity.selectDateState
);
const selectTimesState = createSelector(
  getDeliveryState,
  fromDeliveryEntity.selectTimeState
);

export const selectAllDeliveryDates = createSelector(
  selectDatesState,
  fromDeliveryEntity.selectAllDates
);
export const selectAllDeliveryTimes = createSelector(
  selectTimesState,
  fromDeliveryEntity.selectAllTimes
);
export const selectInHomeDelivery = createSelector(
  getDeliveryState,
  fromDeliveryEntity.getInHomeDelivery
);
export const selectSelectedTime = createSelector(
  getDeliveryState,
  fromDeliveryEntity.getSelectedTime
);
