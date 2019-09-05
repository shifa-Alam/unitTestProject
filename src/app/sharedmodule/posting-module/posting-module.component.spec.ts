import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingModuleComponent } from './posting-module.component';

describe('PostingModuleComponent', () => {
  let component: PostingModuleComponent;
  let fixture: ComponentFixture<PostingModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
