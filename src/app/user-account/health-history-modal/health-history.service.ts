import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthHistoryService {
  private baseUrl = 'http://localhost:8001';

  constructor(private http: HttpClient) {}

  getHealthHistories(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/users/${userId}/health_histories/`);
  }
}
