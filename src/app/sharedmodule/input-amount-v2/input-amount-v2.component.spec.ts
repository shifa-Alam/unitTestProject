import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAmountV2Component } from './input-amount-v2.component';

describe('InputAmountV2Component', () => {
  let component: InputAmountV2Component;
  let fixture: ComponentFixture<InputAmountV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAmountV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAmountV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
