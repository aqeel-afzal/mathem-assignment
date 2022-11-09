import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { selectSelectedTime } from '@mathem-assignment/mathem/delivery/data-access';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mathem-assignment-feature-confirm',
  templateUrl: './feature-confirm.component.html',
  styleUrls: ['./feature-confirm.component.scss'],
})
export class FeatureConfirmComponent {
  selectedTime$ = this.store.select(selectSelectedTime);

  constructor(private router: Router, private store: Store) {}

  onBtnClick() {
    this.router.navigate(['delivey']);
  }
}
