import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDeForceComponent } from './tour-de-force.component';

describe('TourDeForceComponent', () => {
  let component: TourDeForceComponent;
  let fixture: ComponentFixture<TourDeForceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDeForceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDeForceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
