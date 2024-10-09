import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  vehicleInfo$ = new BehaviorSubject({
    vehicleType: '',
    manufacturerName: '',
    modelName: '',
    variant: '',
    yearOfPurchase: 0,
    basePrice: 0,
    fuelType: '',
    transmissionType: '',
    vehicleCondition: '',
    zoneType: '',
    previousClaim: false,
    registrationNo: '',
    policyType: '',
  });

  policyInfo$ = new BehaviorSubject({
    policyId: 0,
    mainPolicyType: '',
    coverageAmount: 0,
    premiumAmount: 0,
    termLength: 0,
    policyStatus: '',
  });

  constructor(private http: HttpClient) {}

  showPolicy(vehicle: any, policyType: string): Observable<any> {
    return this.http.post(
      'http://localhost:8082/policy/showPolicy/' + policyType,
      vehicle
    );
  }

  getPolicy(vehicle: any, policyType: string): Observable<any> {
    return this.http.post(
      'http://localhost:8082/policy/getPolicy/' + policyType,
      vehicle
    );
  }

  setVehicleInfo(
    vehicleType: string,
    manufacturerName: string,
    modelName: string,
    variant: string,
    yearOfPurchase: number,
    basePrice: number,
    fuelType: string,
    transmissionType: string,
    vehicleCondition: string,
    zoneType: string,
    previousClaim: boolean,
    registrationNo: string,
    policyType: string
  ): void {
    this.vehicleInfo$.next({
      vehicleType: vehicleType,
      manufacturerName: manufacturerName,
      modelName: modelName,
      variant: variant,
      yearOfPurchase: yearOfPurchase,
      basePrice: basePrice,
      fuelType: fuelType,
      transmissionType: transmissionType,
      vehicleCondition: vehicleCondition,
      zoneType: zoneType,
      previousClaim: previousClaim,
      registrationNo: registrationNo,
      policyType: policyType,
    });
  }

  setPolicyInfo(
    policyId: number,
    mainPolicyType: string,
    coverageAmount: number,
    premiumAmount: number,
    termLength: number,
    policyStatus: string
  ): void {
    this.policyInfo$.next({
      policyId: policyId,
      mainPolicyType: mainPolicyType,
      coverageAmount: coverageAmount,
      premiumAmount: premiumAmount,
      termLength: termLength,
      policyStatus: policyStatus,
    });
  }
}
