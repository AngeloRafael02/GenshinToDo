import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcharsComponent } from './allchars.component';

describe('AllcharsComponent', () => {
  let component: AllcharsComponent;
  let fixture: ComponentFixture<AllcharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
