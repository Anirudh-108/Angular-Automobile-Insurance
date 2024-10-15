import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePolicyComponent } from './choose-policy.component';

describe('ChoosePolicyComponent', () => {
  let component: ChoosePolicyComponent;
  let fixture: ComponentFixture<ChoosePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
