import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculamEnrichment4Component } from './curriculam-enrichment4.component';

describe('CurriculamEnrichment4Component', () => {
  let component: CurriculamEnrichment4Component;
  let fixture: ComponentFixture<CurriculamEnrichment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculamEnrichment4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculamEnrichment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
