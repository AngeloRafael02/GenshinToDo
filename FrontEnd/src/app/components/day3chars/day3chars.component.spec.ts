import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3charsComponent } from './day3chars.component';

describe('Day3charsComponent', () => {
  let component: Day3charsComponent;
  let fixture: ComponentFixture<Day3charsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day3charsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3charsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
