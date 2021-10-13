import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamPlanning6Component } from './curriculam-planning6.component';

describe('CurriculamPlanning6Component', () => {
  let component: CurriculamPlanning6Component;
  let fixture: ComponentFixture<CurriculamPlanning6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamPlanning6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamPlanning6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
