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

  constructor(private authService: AuthService, private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
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
        this.router.navigate(['/user-account']); // Navigate to user-account page
      }, error => {
        console.error('Login failed', error);
      });
    } else {
      this.authService.register(registerData).subscribe(response => {
        console.log('Registration successful', response);
        this.router.navigate(['/user-account']); // Navigate to user-account page
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
}
