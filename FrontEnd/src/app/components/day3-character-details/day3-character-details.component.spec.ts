import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3CharacterDetailsComponent } from './day3-character-details.component';

describe('Day3CharacterDetailsComponent', () => {
  let component: Day3CharacterDetailsComponent;
  let fixture: ComponentFixture<Day3CharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3CharacterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3CharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
