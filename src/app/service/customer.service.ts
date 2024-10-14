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

  updateCustomer(customer: any, token: any): Observable<any> {
    return this.http.put('http://localhost:8082/customer/update', customer, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  addComplaint(complaint: any, token: any, id: any): Observable<any> {
    return this.http.post(
      'http://localhost:8082/complaint/add-complaint/' + id,
      complaint,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  addVehicle(vehicle: any, token: any): Observable<any> {
    return this.http.post('http://localhost:8082/vehicle/add', vehicle, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
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
