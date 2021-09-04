import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableitemsComponent } from './tableitems.component';

describe('TableitemsComponent', () => {
  let component: TableitemsComponent;
  let fixture: ComponentFixture<TableitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
