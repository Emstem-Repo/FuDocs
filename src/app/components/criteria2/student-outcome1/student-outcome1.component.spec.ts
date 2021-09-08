import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOutcome1Component } from './student-outcome1.component';

describe('StudentOutcome1Component', () => {
  let component: StudentOutcome1Component;
  let fixture: ComponentFixture<StudentOutcome1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOutcome1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOutcome1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
