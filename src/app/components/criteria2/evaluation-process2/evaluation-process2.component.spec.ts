import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationProcess2Component } from './evaluation-process2.component';

describe('EvaluationProcess2Component', () => {
  let component: EvaluationProcess2Component;
  let fixture: ComponentFixture<EvaluationProcess2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationProcess2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationProcess2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
