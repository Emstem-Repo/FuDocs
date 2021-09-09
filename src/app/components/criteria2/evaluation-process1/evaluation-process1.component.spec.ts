import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationProcess1Component } from './evaluation-process1.component';

describe('EvaluationProcess1Component', () => {
  let component: EvaluationProcess1Component;
  let fixture: ComponentFixture<EvaluationProcess1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationProcess1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationProcess1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
