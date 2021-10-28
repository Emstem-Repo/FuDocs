import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAcademicyearComponent } from './master-academicyear.component';

describe('MasterAcademicyearComponent', () => {
  let component: MasterAcademicyearComponent;
  let fixture: ComponentFixture<MasterAcademicyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterAcademicyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAcademicyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
