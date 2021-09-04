import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeditarComponent } from './dialogeditar.component';

describe('DialogeditarComponent', () => {
  let component: DialogeditarComponent;
  let fixture: ComponentFixture<DialogeditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogeditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
