import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDocumentsComponent } from './customer-documents.component';

describe('CustomerDocumentsComponent', () => {
  let component: CustomerDocumentsComponent;
  let fixture: ComponentFixture<CustomerDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
