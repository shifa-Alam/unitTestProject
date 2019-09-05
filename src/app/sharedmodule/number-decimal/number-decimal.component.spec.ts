import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDecimalComponent } from './number-decimal.component';

describe('NumberDecimalComponent', () => {
  let component: NumberDecimalComponent;
  let fixture: ComponentFixture<NumberDecimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberDecimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDecimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
