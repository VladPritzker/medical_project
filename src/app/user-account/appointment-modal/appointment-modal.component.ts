import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent {
  @Input() appointments: any[] = [];
  @Input() userId: number = 0;  // Default value for userId
  @Output() close = new EventEmitter<void>();

  constructor(private appointmentService: AppointmentService) {}

  closeModal() {
    this.close.emit();
  }

  updateAppointment(appointment: any) {
    this.appointmentService.updateAppointment(this.userId, appointment.id, appointment).subscribe(
      (response: any) => {
        console.log('Appointment updated successfully');
      },
      (error: any) => {
        console.error('Error updating appointment', error);
      }
    );
  }
}
