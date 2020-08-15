import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrityaganaComponent } from './nrityagana.component';

describe('NrityaganaComponent', () => {
  let component: NrityaganaComponent;
  let fixture: ComponentFixture<NrityaganaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrityaganaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrityaganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
