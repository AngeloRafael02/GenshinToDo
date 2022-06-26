import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2WeaponDetailsComponent } from './day2-weapon-details.component';

describe('Day2WeaponDetailsComponent', () => {
  let component: Day2WeaponDetailsComponent;
  let fixture: ComponentFixture<Day2WeaponDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2WeaponDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2WeaponDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
