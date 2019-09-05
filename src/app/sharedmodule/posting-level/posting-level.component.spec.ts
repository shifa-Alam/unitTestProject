import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingLevelComponent } from './posting-level.component';

describe('PostingLevelComponent', () => {
  let component: PostingLevelComponent;
  let fixture: ComponentFixture<PostingLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
