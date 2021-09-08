import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileQuality1Component } from './teacher-profile-quality1.component';

describe('TeacherProfileQuality1Component', () => {
  let component: TeacherProfileQuality1Component;
  let fixture: ComponentFixture<TeacherProfileQuality1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileQuality1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileQuality1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
