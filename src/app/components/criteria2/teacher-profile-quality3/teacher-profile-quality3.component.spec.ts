import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileQuality3Component } from './teacher-profile-quality3.component';

describe('TeacherProfileQuality3Component', () => {
  let component: TeacherProfileQuality3Component;
  let fixture: ComponentFixture<TeacherProfileQuality3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileQuality3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileQuality3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
