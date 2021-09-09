import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrolment1Component } from './student-enrolment1.component';

describe('StudentEnrolment1Component', () => {
  let component: StudentEnrolment1Component;
  let fixture: ComponentFixture<StudentEnrolment1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrolment1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrolment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
