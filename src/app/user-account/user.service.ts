import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8001/users/'; // Base URL for your API

  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${userId}/`); // Ensure this endpoint is correct
  }
}
