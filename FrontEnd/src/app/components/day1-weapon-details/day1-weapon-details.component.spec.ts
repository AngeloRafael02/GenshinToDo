import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1WeaponDetailsComponent } from './day1-weapon-details.component';

describe('Day1WeaponDetailsComponent', () => {
  let component: Day1WeaponDetailsComponent;
  let fixture: ComponentFixture<Day1WeaponDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1WeaponDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1WeaponDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
