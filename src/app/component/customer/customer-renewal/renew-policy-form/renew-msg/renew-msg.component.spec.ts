import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewMsgComponent } from './renew-msg.component';

describe('RenewMsgComponent', () => {
  let component: RenewMsgComponent;
  let fixture: ComponentFixture<RenewMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenewMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenewMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
