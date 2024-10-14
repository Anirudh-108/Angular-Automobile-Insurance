import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewCheckoutComponent } from './renew-checkout.component';

describe('RenewCheckoutComponent', () => {
  let component: RenewCheckoutComponent;
  let fixture: ComponentFixture<RenewCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
