import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamPlanning1Component } from './curriculam-planning1.component';

describe('CurriculamPlanning1Component', () => {
  let component: CurriculamPlanning1Component;
  let fixture: ComponentFixture<CurriculamPlanning1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamPlanning1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamPlanning1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
