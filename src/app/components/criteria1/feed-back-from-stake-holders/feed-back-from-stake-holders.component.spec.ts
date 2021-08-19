import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackFromStakeHoldersComponent } from './feed-back-from-stake-holders.component';

describe('FeedBackFromStakeHoldersComponent', () => {
  let component: FeedBackFromStakeHoldersComponent;
  let fixture: ComponentFixture<FeedBackFromStakeHoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBackFromStakeHoldersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackFromStakeHoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
