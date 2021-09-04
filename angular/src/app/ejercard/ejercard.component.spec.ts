import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercardComponent } from './ejercard.component';

describe('EjercardComponent', () => {
  let component: EjercardComponent;
  let fixture: ComponentFixture<EjercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
