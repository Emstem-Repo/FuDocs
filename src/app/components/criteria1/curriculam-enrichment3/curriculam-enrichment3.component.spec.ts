import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamEnrichment3Component } from './curriculam-enrichment3.component';

describe('CurriculamEnrichment3Component', () => {
  let component: CurriculamEnrichment3Component;
  let fixture: ComponentFixture<CurriculamEnrichment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamEnrichment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamEnrichment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
