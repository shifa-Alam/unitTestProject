import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetTypeComponent } from './sheet-type.component';

describe('SheetTypeComponent', () => {
  let component: SheetTypeComponent;
  let fixture: ComponentFixture<SheetTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
