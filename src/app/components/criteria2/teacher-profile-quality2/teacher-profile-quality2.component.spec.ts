import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileQuality2Component } from './teacher-profile-quality2.component';

describe('TeacherProfileQuality2Component', () => {
  let component: TeacherProfileQuality2Component;
  let fixture: ComponentFixture<TeacherProfileQuality2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileQuality2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileQuality2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
