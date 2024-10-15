import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimDocumentsComponent } from './claim-documents.component';

describe('ClaimDocumentsComponent', () => {
  let component: ClaimDocumentsComponent;
  let fixture: ComponentFixture<ClaimDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimDocumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
