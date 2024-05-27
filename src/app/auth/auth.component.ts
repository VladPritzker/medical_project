import { Component } from '@angular/core';
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

  constructor(private authService: AuthService) { }

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
      }, error => {
        console.error('Login failed', error);
      });
    } else {
      this.authService.register(registerData).subscribe(response => {
        console.log('Registration successful', response);
      }, error => {
        console.error('Registration failed', error);
      });
    }
  }
}
