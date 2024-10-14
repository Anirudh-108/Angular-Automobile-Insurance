import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPolicyFormComponent } from './renew-policy-form.component';

describe('RenewPolicyFormComponent', () => {
  let component: RenewPolicyFormComponent;
  let fixture: ComponentFixture<RenewPolicyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewPolicyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewPolicyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
