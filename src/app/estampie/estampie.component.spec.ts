import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstampieComponent } from './estampie.component';

describe('EstampieComponent', () => {
  let component: EstampieComponent;
  let fixture: ComponentFixture<EstampieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstampieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstampieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
