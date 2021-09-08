import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningProcess4Component } from './teaching-learning-process4.component';

describe('TeachingLearningProcess4Component', () => {
  let component: TeachingLearningProcess4Component;
  let fixture: ComponentFixture<TeachingLearningProcess4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingLearningProcess4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingLearningProcess4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
