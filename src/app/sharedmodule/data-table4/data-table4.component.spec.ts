import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTable4Component } from './data-table4.component';

describe('DataTable4Component', () => {
  let component: DataTable4Component;
  let fixture: ComponentFixture<DataTable4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTable4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTable4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
