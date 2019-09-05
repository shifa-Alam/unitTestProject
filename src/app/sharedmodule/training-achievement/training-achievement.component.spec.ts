import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAchievementComponent } from './training-achievement.component';

describe('TrainingAchievementComponent', () => {
  let component: TrainingAchievementComponent;
  let fixture: ComponentFixture<TrainingAchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAchievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
