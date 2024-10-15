import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimVehicleDetailsComponent } from './claim-vehicle-details.component';

describe('ClaimVehicleDetailsComponent', () => {
  let component: ClaimVehicleDetailsComponent;
  let fixture: ComponentFixture<ClaimVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimVehicleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
