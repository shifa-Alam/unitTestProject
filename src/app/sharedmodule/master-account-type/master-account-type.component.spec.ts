import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAccountTypeComponent } from './master-account-type.component';

describe('MasterAccountTypeComponent', () => {
  let component: MasterAccountTypeComponent;
  let fixture: ComponentFixture<MasterAccountTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAccountTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
