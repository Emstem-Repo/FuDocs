import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOutcome3Component } from './student-outcome3.component';

describe('StudentOutcome3Component', () => {
  let component: StudentOutcome3Component;
  let fixture: ComponentFixture<StudentOutcome3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOutcome3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOutcome3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
