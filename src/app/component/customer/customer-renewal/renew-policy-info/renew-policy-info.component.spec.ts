import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPolicyInfoComponent } from './renew-policy-info.component';

describe('RenewPolicyInfoComponent', () => {
  let component: RenewPolicyInfoComponent;
  let fixture: ComponentFixture<RenewPolicyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewPolicyInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewPolicyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
