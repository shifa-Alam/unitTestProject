import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeComponent } from './transaction-type.component';

describe('TransactionTypeComponent', () => {
  let component: TransactionTypeComponent;
  let fixture: ComponentFixture<TransactionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
