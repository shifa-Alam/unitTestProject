import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAccountPropertTypeComponent } from './master-account-propert-type.component';

describe('MasterAccountPropertTypeComponent', () => {
  let component: MasterAccountPropertTypeComponent;
  let fixture: ComponentFixture<MasterAccountPropertTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAccountPropertTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAccountPropertTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
