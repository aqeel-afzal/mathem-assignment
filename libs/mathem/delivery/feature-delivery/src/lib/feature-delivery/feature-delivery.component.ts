import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DeliveryActions,
  DeliveryTimeEntity,
  selectAllDeliveryDates,
  selectAllDeliveryTimes,
  selectInHomeDelivery,
  selectSelectedTime,
} from '@mathem-assignment/mathem/delivery/data-access';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mathem-assignment-feature-delivery',
  templateUrl: './feature-delivery.component.html',
  styleUrls: ['./feature-delivery.component.scss'],
})
export class FeatureDeliveryComponent implements OnInit {
  inHomeDelivery$ = this.store.select(selectInHomeDelivery);
  selectedTime$ = this.store.select(selectSelectedTime);
  dates$ = this.store.select(selectAllDeliveryDates);
  times$ = combineLatest([
    this.store.select(selectAllDeliveryTimes),
    this.inHomeDelivery$,
  ]).pipe(
    map(([times, inHomeDelivery]) =>
      times.filter(
        (time: DeliveryTimeEntity) =>
          !inHomeDelivery || time.inHomeAvailable === inHomeDelivery
      )
    )
  );

  disabled = true;
  selectedTime!: DeliveryTimeEntity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(DeliveryActions.loadDeliveryDates());
    this.store.dispatch(DeliveryActions.getInHomeDelivery());
  }

  onSelectDate(date: string) {
    this.disabled = true;
    this.store.dispatch(DeliveryActions.loadDeliveryTimes({ date }));
  }

  onSelectTime(time: DeliveryTimeEntity) {
    this.selectedTime = time;
    this.disabled = false;
  }

  onHomeDeliveryChange(value: boolean) {
    this.store.dispatch(
      DeliveryActions.setInHomeDelivery({ inHomeDelivery: value })
    );
  }

  onBtnClick() {
    this.store.dispatch(
      DeliveryActions.setSelectedTime({
        selectedTime: this.selectedTime,
      })
    );

    this.router.navigate(['confirm'], { relativeTo: this.route });
  }
}
