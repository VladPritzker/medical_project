import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthHistoryService {
  private baseUrl = 'http://localhost:8001';  // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  getHealthHistories(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${userId}/health_histories/`);
  }

  updateHealthHistory(userId: number, healthHistoryId: number, healthHistory: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/users/${userId}/health_histories/${healthHistoryId}/`, healthHistory);
  }
}
