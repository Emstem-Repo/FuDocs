import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrolment3Component } from './student-enrolment3.component';

describe('StudentEnrolment3Component', () => {
  let component: StudentEnrolment3Component;
  let fixture: ComponentFixture<StudentEnrolment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrolment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrolment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
