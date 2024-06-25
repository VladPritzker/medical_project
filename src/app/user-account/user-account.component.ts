import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { Router } from '@angular/router'; // Import Router
import { AppointmentService } from './appointment-modal/appointment.service'; // Import AppointmentService
import { HealthHistoryService } from './health-history-modal/health-history.service'; // Import HealthHistoryService

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  user: any = {};
  userId: number | null = null;
  isAppointmentsModalOpen = false;
  isHealthHistoryModalOpen = false;
  appointments: any[] = [];
  healthHistories: any[] = [];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private appointmentService: AppointmentService, // Inject AppointmentService
    private healthHistoryService: HealthHistoryService // Inject HealthHistoryService
  ) {}

  ngOnInit(): void {
    const userIdParam = this.route.snapshot.paramMap.get('userId');
    this.userId = userIdParam ? +userIdParam : null; // Convert userId to a number
    if (this.userId !== null) {
      this.getUserDetails();
    }
  }

  getUserDetails(): void {
    if (this.userId !== null) {
      this.userService.getUserDetails(this.userId.toString()).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Error fetching user details', error);
        }
      );
    }
  }


  navigateToUrl(): void {
    this.router.navigate(['/auth']); // Specify your target URL
  }

  openAppointmentsModal(): void {
    this.isAppointmentsModalOpen = true;
    this.loadAppointments();
  }

  closeAppointmentsModal(): void {
    this.isAppointmentsModalOpen = false;
  }

  loadAppointments(): void {
    if (this.userId !== null) {
      this.appointmentService.getAppointments(this.userId).subscribe(
        (data) => {
          this.appointments = data;
        },
        (error) => {
          console.error('Error fetching appointments', error);
        }
      );
    }
  }

  openHealthHistoryModal(): void {
    this.isHealthHistoryModalOpen = true;
    this.loadHealthHistories();
  }

  closeHealthHistoryModal(): void {
    this.isHealthHistoryModalOpen = false;
  }

  loadHealthHistories(): void {
    if (this.userId !== null) {
      this.healthHistoryService.getHealthHistories(this.userId).subscribe(
        (data) => {
          this.healthHistories = data;
        },
        (error) => {
          console.error('Error fetching health histories', error);
        }
      );
    }
  }
}
