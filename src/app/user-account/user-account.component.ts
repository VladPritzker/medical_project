import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  user: any = {};
  userId: string | null = '';

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    if (this.userId) {
      this.getUserDetails();
    }
  }

  getUserDetails(): void {
    if (this.userId) {
      this.userService.getUserDetails(this.userId).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          console.error('Error fetching user details', error);
        }
      );
    }
  }

  registerUser(): void {
    const newUser = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123'
    };

    this.userService.registerUser(newUser).subscribe(
      (response) => {
        console.log('User registered successfully', response);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    );
  }
}
