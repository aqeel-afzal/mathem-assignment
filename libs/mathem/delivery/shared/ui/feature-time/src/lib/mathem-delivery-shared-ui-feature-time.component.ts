import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeliveryTimeEntity } from '@mathem-assignment/mathem/delivery/data-access';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'mathem-assignment-mathem-delivery-shared-ui-feature-time',
  templateUrl: './mathem-delivery-shared-ui-feature-time.component.html',
  styleUrls: ['./mathem-delivery-shared-ui-feature-time.component.scss'],
})
export class MathemDeliverySharedUiFeatureTimeComponent {
  @Input() times!: Array<DeliveryTimeEntity>;
  @Output() selectTime = new EventEmitter<DeliveryTimeEntity>();

  onSelect(time: DeliveryTimeEntity) {
    this.selectTime.emit(time);
  }
}
