import { TestBed } from '@angular/core/testing';

import { Critera1Service } from './critera1.service';

describe('Critera1Service', () => {
  let service: Critera1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Critera1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
