import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDiversity1Component } from './student-diversity1.component';

describe('StudentDiversity1Component', () => {
  let component: StudentDiversity1Component;
  let fixture: ComponentFixture<StudentDiversity1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDiversity1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDiversity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
