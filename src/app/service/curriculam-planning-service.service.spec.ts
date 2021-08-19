import { TestBed } from '@angular/core/testing';

import { CurriculamPlanningServiceService } from './curriculam-planning-service.service';

describe('CurriculamPlanningServiceService', () => {
  let service: CurriculamPlanningServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurriculamPlanningServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
