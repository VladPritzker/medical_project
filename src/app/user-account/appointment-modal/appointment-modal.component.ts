import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent {
  @Input() appointments: any[] = [];  // Initialize with an empty array
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
