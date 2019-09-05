import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboboxGlobalComponent } from './combobox-global.component';

describe('ComboboxGlobalComponent', () => {
  let component: ComboboxGlobalComponent;
  let fixture: ComponentFixture<ComboboxGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboboxGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboboxGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
