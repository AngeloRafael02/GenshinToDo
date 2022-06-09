import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3weaponsComponent } from './day3weapons.component';

describe('Day3weaponsComponent', () => {
  let component: Day3weaponsComponent;
  let fixture: ComponentFixture<Day3weaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3weaponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3weaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
