import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8001';  // Обновите базовый URL в соответствии с вашим

  constructor(private http: HttpClient) { }

  login(data: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login/`, data);
  }

  register(data: { username: string, email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/`, data);
  }
}
