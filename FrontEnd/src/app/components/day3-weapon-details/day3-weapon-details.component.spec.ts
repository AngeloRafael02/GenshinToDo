import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3WeaponDetailsComponent } from './day3-weapon-details.component';

describe('Day3WeaponDetailsComponent', () => {
  let component: Day3WeaponDetailsComponent;
  let fixture: ComponentFixture<Day3WeaponDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3WeaponDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3WeaponDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
