import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1weaponsComponent } from './day1weapons.component';

describe('Day1weaponsComponent', () => {
  let component: Day1weaponsComponent;
  let fixture: ComponentFixture<Day1weaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1weaponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1weaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
