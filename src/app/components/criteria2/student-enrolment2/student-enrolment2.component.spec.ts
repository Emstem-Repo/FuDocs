import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEnrolment2Component } from './student-enrolment2.component';

describe('StudentEnrolment2Component', () => {
  let component: StudentEnrolment2Component;
  let fixture: ComponentFixture<StudentEnrolment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEnrolment2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEnrolment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
