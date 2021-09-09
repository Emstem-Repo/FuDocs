import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDiversity3Component } from './student-diversity3.component';

describe('StudentDiversity3Component', () => {
  let component: StudentDiversity3Component;
  let fixture: ComponentFixture<StudentDiversity3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDiversity3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDiversity3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
