import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningProcess2Component } from './teaching-learning-process2.component';

describe('TeachingLearningProcess2Component', () => {
  let component: TeachingLearningProcess2Component;
  let fixture: ComponentFixture<TeachingLearningProcess2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingLearningProcess2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingLearningProcess2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
