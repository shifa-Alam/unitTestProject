import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePayslipStatusComponent } from './employee-payslip-status.component';

describe('EmployeePayslipStatusComponent', () => {
  let component: EmployeePayslipStatusComponent;
  let fixture: ComponentFixture<EmployeePayslipStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeePayslipStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePayslipStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
