import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadV2Component } from './upload-v2.component';

describe('UploadV2Component', () => {
  let component: UploadV2Component;
  let fixture: ComponentFixture<UploadV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
