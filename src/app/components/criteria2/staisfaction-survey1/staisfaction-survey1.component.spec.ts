import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaisfactionSurvey1Component } from './staisfaction-survey1.component';

describe('StaisfactionSurvey1Component', () => {
  let component: StaisfactionSurvey1Component;
  let fixture: ComponentFixture<StaisfactionSurvey1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaisfactionSurvey1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaisfactionSurvey1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
