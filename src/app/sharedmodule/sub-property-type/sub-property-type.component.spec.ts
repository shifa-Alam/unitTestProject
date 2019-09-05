import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPropertyTypeComponent } from './sub-property-type.component';

describe('SubPropertyTypeComponent', () => {
  let component: SubPropertyTypeComponent;
  let fixture: ComponentFixture<SubPropertyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPropertyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPropertyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
