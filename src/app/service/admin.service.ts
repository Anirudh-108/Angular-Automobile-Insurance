import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  getAllDoctorsApi: string = 'http://localhost:8082/doctor/all';

  constructor(private http: HttpClient) {}

  getAllDoctors(): Observable<any> {
    return this.http.get<any>(this.getAllDoctorsApi, {
      headers: new HttpHeaders().set(
        'Authorization',
        'Bearer ' + localStorage.getItem('token')
      ),
    });
  }
}
