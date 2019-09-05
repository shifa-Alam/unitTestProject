import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSkillComponent } from './language-skill.component';

describe('LanguageSkillComponent', () => {
  let component: LanguageSkillComponent;
  let fixture: ComponentFixture<LanguageSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
