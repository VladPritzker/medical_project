import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8001'; // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  getUserDetails(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${userId}/`);
  }
}
