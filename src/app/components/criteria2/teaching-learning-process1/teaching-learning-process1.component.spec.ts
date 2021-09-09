import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningProcess1Component } from './teaching-learning-process1.component';

describe('TeachingLearningProcess1Component', () => {
  let component: TeachingLearningProcess1Component;
  let fixture: ComponentFixture<TeachingLearningProcess1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingLearningProcess1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingLearningProcess1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
