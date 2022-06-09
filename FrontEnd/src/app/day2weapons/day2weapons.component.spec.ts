import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2weaponsComponent } from './day2weapons.component';

describe('Day2weaponsComponent', () => {
  let component: Day2weaponsComponent;
  let fixture: ComponentFixture<Day2weaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2weaponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2weaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
