import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneTypeComponent } from './phone-type.component';

describe('PhoneTypeComponent', () => {
  let component: PhoneTypeComponent;
  let fixture: ComponentFixture<PhoneTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
