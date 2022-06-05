import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2charsComponent } from './day2chars.component';

describe('Day2charsComponent', () => {
  let component: Day2charsComponent;
  let fixture: ComponentFixture<Day2charsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day2charsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2charsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
