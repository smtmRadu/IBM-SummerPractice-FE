import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentModalComponent } from './assessment-modal.component';

describe('AssessmentModalComponent', () => {
  let component: AssessmentModalComponent;
  let fixture: ComponentFixture<AssessmentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentModalComponent]
    });
    fixture = TestBed.createComponent(AssessmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
