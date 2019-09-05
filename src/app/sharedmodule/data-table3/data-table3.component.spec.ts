import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTable3Component } from './data-table3.component';

describe('DataTable3Component', () => {
  let component: DataTable3Component;
  let fixture: ComponentFixture<DataTable3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTable3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
