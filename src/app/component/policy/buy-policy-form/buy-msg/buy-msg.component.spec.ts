import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMsgComponent } from './buy-msg.component';

describe('BuyMsgComponent', () => {
  let component: BuyMsgComponent;
  let fixture: ComponentFixture<BuyMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
