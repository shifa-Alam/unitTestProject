import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAccountOptionComponent } from './master-account-option.component';

describe('MasterAccountOptionComponent', () => {
  let component: MasterAccountOptionComponent;
  let fixture: ComponentFixture<MasterAccountOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAccountOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAccountOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
