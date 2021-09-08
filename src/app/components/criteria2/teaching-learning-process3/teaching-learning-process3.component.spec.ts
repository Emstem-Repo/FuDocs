import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingLearningProcess3Component } from './teaching-learning-process3.component';

describe('TeachingLearningProcess3Component', () => {
  let component: TeachingLearningProcess3Component;
  let fixture: ComponentFixture<TeachingLearningProcess3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingLearningProcess3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingLearningProcess3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
