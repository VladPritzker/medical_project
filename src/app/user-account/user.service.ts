import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8001/users/1/'; // Update the URL to match your API

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
