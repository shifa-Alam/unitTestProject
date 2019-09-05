import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTypeCpComponent } from './role-type-cp.component';

describe('RoleTypeCpComponent', () => {
  let component: RoleTypeCpComponent;
  let fixture: ComponentFixture<RoleTypeCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleTypeCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleTypeCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
