import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  uploadImage(formData: FormData, id: any) {
    return this.http.post(
      'http://localhost:8082/customer/documents/upload/' + id,
      formData
    );
  }
}
