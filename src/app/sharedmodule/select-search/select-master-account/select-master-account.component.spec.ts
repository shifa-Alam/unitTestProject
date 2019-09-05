import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMasterAccountComponent } from './select-master-account.component';

describe('SelectMasterAccountComponent', () => {
  let component: SelectMasterAccountComponent;
  let fixture: ComponentFixture<SelectMasterAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMasterAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMasterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
