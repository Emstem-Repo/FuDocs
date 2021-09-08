import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOutcome4Component } from './student-outcome4.component';

describe('StudentOutcome4Component', () => {
  let component: StudentOutcome4Component;
  let fixture: ComponentFixture<StudentOutcome4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOutcome4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOutcome4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
