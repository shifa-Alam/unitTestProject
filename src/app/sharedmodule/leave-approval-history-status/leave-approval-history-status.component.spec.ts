import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApprovalHistoryStatusComponent } from './leave-approval-history-status.component';

describe('LeaveApprovalHistoryStatusComponent', () => {
  let component: LeaveApprovalHistoryStatusComponent;
  let fixture: ComponentFixture<LeaveApprovalHistoryStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveApprovalHistoryStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApprovalHistoryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
