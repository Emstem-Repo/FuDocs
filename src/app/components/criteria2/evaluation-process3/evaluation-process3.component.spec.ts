import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationProcess3Component } from './evaluation-process3.component';

describe('EvaluationProcess3Component', () => {
  let component: EvaluationProcess3Component;
  let fixture: ComponentFixture<EvaluationProcess3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationProcess3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationProcess3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
