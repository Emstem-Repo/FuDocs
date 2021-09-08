import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileQuality5Component } from './teacher-profile-quality5.component';

describe('TeacherProfileQuality5Component', () => {
  let component: TeacherProfileQuality5Component;
  let fixture: ComponentFixture<TeacherProfileQuality5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileQuality5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileQuality5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
