import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewVehicleInfoComponent } from './renew-vehicle-info.component';

describe('RenewVehicleInfoComponent', () => {
  let component: RenewVehicleInfoComponent;
  let fixture: ComponentFixture<RenewVehicleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewVehicleInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewVehicleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
