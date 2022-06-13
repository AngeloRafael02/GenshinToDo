import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllweaponsComponent } from './allweapons.component';

describe('AllweaponsComponent', () => {
  let component: AllweaponsComponent;
  let fixture: ComponentFixture<AllweaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllweaponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllweaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
