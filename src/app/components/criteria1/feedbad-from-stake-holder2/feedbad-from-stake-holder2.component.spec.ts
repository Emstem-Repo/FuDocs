import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbadFromStakeHolder2Component } from './feedbad-from-stake-holder2.component';

describe('FeedbadFromStakeHolder2Component', () => {
  let component: FeedbadFromStakeHolder2Component;
  let fixture: ComponentFixture<FeedbadFromStakeHolder2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbadFromStakeHolder2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbadFromStakeHolder2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
