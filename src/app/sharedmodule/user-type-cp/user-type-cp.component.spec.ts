import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeCpComponent } from './user-type-cp.component';

describe('UserTypeCpComponent', () => {
  let component: UserTypeCpComponent;
  let fixture: ComponentFixture<UserTypeCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypeCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
