import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1CharacterDetailsComponent } from './day1-character-details.component';

describe('Day1CharacterDetailsComponent', () => {
  let component: Day1CharacterDetailsComponent;
  let fixture: ComponentFixture<Day1CharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1CharacterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
