import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRenewalComponent } from './customer-renewal.component';

describe('CustomerRenewalComponent', () => {
  let component: CustomerRenewalComponent;
  let fixture: ComponentFixture<CustomerRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRenewalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
