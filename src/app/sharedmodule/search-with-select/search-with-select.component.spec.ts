import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithSelectComponent } from './search-with-select.component';

describe('SearchWithSelectComponent', () => {
  let component: SearchWithSelectComponent;
  let fixture: ComponentFixture<SearchWithSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchWithSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
