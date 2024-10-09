import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPolicyFormComponent } from './buy-policy-form.component';

describe('BuyPolicyFormComponent', () => {
  let component: BuyPolicyFormComponent;
  let fixture: ComponentFixture<BuyPolicyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyPolicyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPolicyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
