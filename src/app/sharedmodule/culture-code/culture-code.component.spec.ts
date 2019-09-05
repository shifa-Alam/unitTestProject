import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureCodeComponent } from './culture-code.component';

describe('CultureCodeComponent', () => {
  let component: CultureCodeComponent;
  let fixture: ComponentFixture<CultureCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
