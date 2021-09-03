import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TolbaComponent } from './tolba.component';

describe('TolbaComponent', () => {
  let component: TolbaComponent;
  let fixture: ComponentFixture<TolbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TolbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TolbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
