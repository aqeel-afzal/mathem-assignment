import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeliveryDateEntity } from '@mathem-assignment/mathem/delivery/data-access';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'mathem-assignment-mathem-delivery-shared-ui-feature-date',
  templateUrl: './mathem-delivery-shared-ui-feature-date.component.html',
  styleUrls: ['./mathem-delivery-shared-ui-feature-date.component.scss'],
})
export class MathemDeliverySharedUiFeatureDateComponent {
  @Input() dates!: Array<DeliveryDateEntity>;
  @Output() selectDate = new EventEmitter<string>();

  onSelect(date: DeliveryDateEntity) {
    this.selectDate.emit(date.value);
  }
}
