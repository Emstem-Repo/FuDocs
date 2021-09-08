import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDiversity2Component } from './student-diversity2.component';

describe('StudentDiversity2Component', () => {
  let component: StudentDiversity2Component;
  let fixture: ComponentFixture<StudentDiversity2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDiversity2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDiversity2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
