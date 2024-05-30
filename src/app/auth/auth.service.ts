import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8001'; // Base URL for the Django API

  constructor(private http: HttpClient) { }

  login(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/`, loginData);
  }

  register(registerData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/`, registerData);
  }
}
