import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimMsgComponent } from './claim-msg.component';

describe('ClaimMsgComponent', () => {
  let component: ClaimMsgComponent;
  let fixture: ComponentFixture<ClaimMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
