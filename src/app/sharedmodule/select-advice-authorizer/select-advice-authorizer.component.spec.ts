import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAdviceAuthorizerComponent } from './select-advice-authorizer.component';

describe('SelectAdviceAuthorizerComponent', () => {
  let component: SelectAdviceAuthorizerComponent;
  let fixture: ComponentFixture<SelectAdviceAuthorizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAdviceAuthorizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAdviceAuthorizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
