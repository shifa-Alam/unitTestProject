import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningDeductionTypeComponent } from './earning-deduction-type.component';

describe('EarningDeductionTypeComponent', () => {
  let component: EarningDeductionTypeComponent;
  let fixture: ComponentFixture<EarningDeductionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningDeductionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningDeductionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
