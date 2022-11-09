import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'mathem-assignment-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() set value(value: boolean) {
    this.checked = value;
  }
  @Input() label = 'checkbox';
  @Input() id = 'checkbox';
  @Output() triggerChange = new EventEmitter<boolean>();

  checked = false;

  change() {
    this.triggerChange.emit(this.checked);
  }
}
