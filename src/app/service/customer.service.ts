import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerInfo$ = new BehaviorSubject({
    name: '',
    email: '',
    contact: '',
  });

  constructor(private http: HttpClient) {}

  getCustomer(username: string): Observable<any> {
    return this.http.get(
      'http://localhost:8082/customer/getCustomer/' + username
    );
  }

  uploadAadhar(formData: FormData, token: string) {
    return this.http.post(
      'http://localhost:8082/customerDocuments/upload',
      formData,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  uploadVehicleRc(model: string, formData: FormData, token: string) {
    return this.http.post(
      'http://localhost:8082/vehicleDocuments/upload/' + model,
      formData,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  setCustomerInfo(name: string, email: string, contact: string): void {
    this.customerInfo$.next({
      name: name,
      email: email,
      contact: contact,
    });
  }
}
