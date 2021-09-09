import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationProcess4Component } from './evaluation-process4.component';

describe('EvaluationProcess4Component', () => {
  let component: EvaluationProcess4Component;
  let fixture: ComponentFixture<EvaluationProcess4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationProcess4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationProcess4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
