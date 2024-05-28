import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-account/user.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    this.userService.getUserDetails().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user details', error);
      }
    );
  }
}
