import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablejercardComponent } from './tablejercard.component';

describe('TablejercardComponent', () => {
  let component: TablejercardComponent;
  let fixture: ComponentFixture<TablejercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablejercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablejercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
