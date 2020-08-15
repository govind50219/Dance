import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JitterburgComponent } from './jitterburg.component';

describe('JitterburgComponent', () => {
  let component: JitterburgComponent;
  let fixture: ComponentFixture<JitterburgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JitterburgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JitterburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
