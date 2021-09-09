import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfileQuality4Component } from './teacher-profile-quality4.component';

describe('TeacherProfileQuality4Component', () => {
  let component: TeacherProfileQuality4Component;
  let fixture: ComponentFixture<TeacherProfileQuality4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherProfileQuality4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfileQuality4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
