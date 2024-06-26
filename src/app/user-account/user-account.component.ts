import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-account',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    // Remove HealthHistoryModalComponent and AppointmentModalComponent imports here
  ],
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

  // Remove methods related to appointment and health history modals
}
