import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamPlanning2Component } from './curriculam-planning2.component';

describe('CurriculamPlanning2Component', () => {
  let component: CurriculamPlanning2Component;
  let fixture: ComponentFixture<CurriculamPlanning2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamPlanning2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamPlanning2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
