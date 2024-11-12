import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  constructor(private http: HttpClient) {}

  getAllData(page: number): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=' + page);
  }
}
