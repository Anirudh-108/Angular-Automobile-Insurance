import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCheckoutComponent } from './claim-checkout.component';

describe('ClaimCheckoutComponent', () => {
  let component: ClaimCheckoutComponent;
  let fixture: ComponentFixture<ClaimCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
