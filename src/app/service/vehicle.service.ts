import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getPolicyTypes(): Observable<any> {
    return this.http.get('http://localhost:8082/vehicle/policyTypes');
  }
  getTransmissionTypes(): Observable<any> {
    return this.http.get('http://localhost:8082/vehicle/transmissionTypes');
  }
  getVehicleConditionTypes(): Observable<any> {
    return this.http.get('http://localhost:8082/vehicle/vehicleConditionTypes');
  }
  getZoneTypes(): Observable<any> {
    return this.http.get('http://localhost:8082/vehicle/zoneTypes');
  }
  getFuelTypes(): Observable<any> {
    return this.http.get('http://localhost:8082/vehicle/fuelTypes');
  }
}
