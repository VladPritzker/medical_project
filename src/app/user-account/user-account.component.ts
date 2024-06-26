import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AppointmentService } from './appointment-modal/appointment.service';
import { HealthHistoryService } from './health-history-modal/health-history.service';

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
    private router: Router,
    private appointmentService: AppointmentService,
    private healthHistoryService: HealthHistoryService
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.userId = +userId; // Convert string to number
      this.getUserDetails();
    }
  }

  getUserDetails(): void {
    if (this.userId !== null) {
      this.userService.getUserDetails(this.userId).subscribe(
        (data: any) => {
          this.user = data;
        },
        (error: any) => {
          console.error('Error fetching user details', error);
        }
      );
    }
  }

  navigateToUrl(): void {
    this.router.navigate(['/auth']);
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
        (data: any) => {
          this.appointments = data;
        },
        (error: any) => {
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
        (data: any) => {
          this.healthHistories = data;
        },
        (error: any) => {
          console.error('Error fetching health histories', error);
        }
      );
    }
  }
}
