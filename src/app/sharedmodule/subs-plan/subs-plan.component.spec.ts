import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsPlanComponent } from './subs-plan.component';

describe('SubsPlanComponent', () => {
  let component: SubsPlanComponent;
  let fixture: ComponentFixture<SubsPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
