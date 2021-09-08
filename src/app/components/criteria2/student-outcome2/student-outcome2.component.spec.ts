import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOutcome2Component } from './student-outcome2.component';

describe('StudentOutcome2Component', () => {
  let component: StudentOutcome2Component;
  let fixture: ComponentFixture<StudentOutcome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOutcome2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOutcome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
