import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamPlanning5Component } from './curriculam-planning5.component';

describe('CurriculamPlanning5Component', () => {
  let component: CurriculamPlanning5Component;
  let fixture: ComponentFixture<CurriculamPlanning5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamPlanning5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamPlanning5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
