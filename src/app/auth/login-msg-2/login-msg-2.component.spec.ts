import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMsg2Component } from './login-msg-2.component';

describe('LoginMsg2Component', () => {
  let component: LoginMsg2Component;
  let fixture: ComponentFixture<LoginMsg2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginMsg2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMsg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
