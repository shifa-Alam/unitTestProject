import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateDailogComponent } from './navigate-dailog.component';

describe('NavigateDailogComponent', () => {
  let component: NavigateDailogComponent;
  let fixture: ComponentFixture<NavigateDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
