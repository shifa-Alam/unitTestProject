import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButton2Component } from './submit-button2.component';

describe('SubmitButton2Component', () => {
  let component: SubmitButton2Component;
  let fixture: ComponentFixture<SubmitButton2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitButton2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitButton2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
