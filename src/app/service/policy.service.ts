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
    previousClaim: '',
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

  buyPolicy(vehicle: any, policyType: string, token: any): Observable<any> {
    return this.http.post(
      'http://localhost:8082/policy/buy/' + policyType,
      vehicle,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  getAllActivePolicies(token: any): Observable<any> {
    return this.http.get('http://localhost:8082/policy/getAllActivePolicies', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  getAllExpiredPolicies(token: any): Observable<any> {
    return this.http.get('http://localhost:8082/policy/getAllExpiredPolicies', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  getActivePolicyById(id: any, token: any): Observable<any> {
    return this.http.get('http://localhost:8082/policy/getActivePolicy/' + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  getAllComplaints(page: number, size: number, token: any): Observable<any> {
    return this.http.get(
      'http://localhost:8082/complaint/all-complaints?page='+page+'&size='+size,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  getNumberOfActivePolicies(token: any): Observable<any> {
    return this.http.get(
      'http://localhost:8082/policy/getNumberOfActivePolicies',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  getNumberOfExpiredPolicies(token: any): Observable<any> {
    return this.http.get(
      'http://localhost:8082/policy/getNumberOfExpiredPolicies',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  getNumberOfClaimsFiled(token: any): Observable<any> {
    return this.http.get(
      'http://localhost:8082/claim/getNumberOfClaimsFiled',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  getAllClaims(page: number, size: number, token: any): Observable<any> {
    return this.http.get(
      'http://localhost:8082/claim/all-claims?page='+page+'&size='+size,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  getVehicleByPolicyId(policyId: any, token: any): Observable<any> {
    return this.http.get('http://localhost:8082/policy/getVehicleByPolicyId/' + policyId, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  getPolicyById(policyId: any, token: any): Observable<any> {
    return this.http.get('http://localhost:8082/policy/getPolicyById/' + policyId, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  renewPolicy(policyId: any, token: any): Observable<any> {
    return this.http.post('http://localhost:8082/renewal/renew/' + policyId, null,{
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
  }

  fileClaim(accidentDetails: any, policyId: any, token: any): Observable<any> {
    return this.http.post(
      'http://localhost:8082/claim/one/' + policyId,
      accidentDetails,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
      }
    );
  }

  getChartData(token: any): Observable<any> {
    return this.http.get('http://localhost:8082/policy/getChartData', {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token),
    });
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
    previousClaim: string,
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
