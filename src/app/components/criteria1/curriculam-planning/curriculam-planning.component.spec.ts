import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamPlanningComponent } from './curriculam-planning.component';

describe('CurriculamPlanningComponent', () => {
  let component: CurriculamPlanningComponent;
  let fixture: ComponentFixture<CurriculamPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
