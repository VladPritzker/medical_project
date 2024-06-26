import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8001';  // Update with your actual backend URL

  constructor(private http: HttpClient) {}

  updateAppointment(userId: number, appointmentId: number, appointment: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/users/${userId}/appointments/${appointmentId}/`, appointment);
  }
}
