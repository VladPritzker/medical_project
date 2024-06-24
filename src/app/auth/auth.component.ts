import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authData = {
    username: '',
    email: '',
    password: ''
  };

  isLoginMode = true;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMessage = null;
  }

  onSubmit() {
    if (!this.authData.email.endsWith('@gmail.com')) {
      this.errorMessage = 'Email must be a valid @gmail.com address.';
      return;
    }

    const loginData = {
      email: this.authData.email,
      password: this.authData.password
    };

    const registerData = {
      username: this.authData.username,
      email: this.authData.email,
      password: this.authData.password
    };

    if (this.isLoginMode) {
      this.authService.login(loginData).subscribe(response => {
        console.log('Login successful', response);
        const userId = response.user_id; // Assuming response contains user_id
        this.router.navigate([`/user-account`, userId]); // Navigate to user-account page with user_id
      }, error => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid email or password. Please try again.';
      });
    } else {
      this.authService.register(registerData).subscribe(response => {
        console.log('Registration successful', response);
        const userId = response.user_id; // Assuming response contains user_id
        this.router.navigate([`/user-account`, userId]); // Navigate to user-account page with user_id
      }, error => {
        console.error('Registration failed', error);
        this.errorMessage = 'Registration failed. Please try again.';
      });
    }
  }
}
