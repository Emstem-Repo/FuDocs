import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamPlanning4Component } from './curriculam-planning4.component';

describe('CurriculamPlanning4Component', () => {
  let component: CurriculamPlanning4Component;
  let fixture: ComponentFixture<CurriculamPlanning4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamPlanning4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamPlanning4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
