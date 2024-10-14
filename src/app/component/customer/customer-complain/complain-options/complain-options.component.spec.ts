import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainOptionsComponent } from './complain-options.component';

describe('ComplainOptionsComponent', () => {
  let component: ComplainOptionsComponent;
  let fixture: ComponentFixture<ComplainOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplainOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplainOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
