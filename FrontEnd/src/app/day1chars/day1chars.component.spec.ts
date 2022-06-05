import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1charsComponent } from './day1chars.component';

describe('Day1charsComponent', () => {
  let component: Day1charsComponent;
  let fixture: ComponentFixture<Day1charsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day1charsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1charsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
