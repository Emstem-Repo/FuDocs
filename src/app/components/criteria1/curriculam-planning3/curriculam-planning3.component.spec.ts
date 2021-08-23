import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamPlanning3Component } from './curriculam-planning3.component';

describe('CurriculamPlanning3Component', () => {
  let component: CurriculamPlanning3Component;
  let fixture: ComponentFixture<CurriculamPlanning3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamPlanning3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamPlanning3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
