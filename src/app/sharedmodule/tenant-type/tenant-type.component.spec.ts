import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantTypeComponent } from './tenant-type.component';

describe('TenantTypeComponent', () => {
  let component: TenantTypeComponent;
  let fixture: ComponentFixture<TenantTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
