import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2CharacterDetailsComponent } from './day2-character-details.component';

describe('Day2CharacterDetailsComponent', () => {
  let component: Day2CharacterDetailsComponent;
  let fixture: ComponentFixture<Day2CharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2CharacterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
