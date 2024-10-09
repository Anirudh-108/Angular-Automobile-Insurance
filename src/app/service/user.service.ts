import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUserApi = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(this.getUserApi);
  }

  getNameByUsername(username:string): Observable<any> {
    return this.http.get('http://localhost:8082/customer/getName/'+username);
  }

  getToken(username: any, password: any): Observable<any> {
    return this.http.post<any>('http://localhost:8082/auth/token', {
      username: username,
      password: password,
    });
  } 

  getUserDetails(token: string): Observable<User> {
    return this.http.get<User>('http://localhost:8082/auth/login', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  addUserDetails(obj: any): Observable<any> {
    return this.http.post('http://localhost:8082/customer/add', obj);
  }

  isUserAutheticated(): boolean{
    let token = localStorage.getItem('token'); 
    return !token?false: true; 
  }
}
