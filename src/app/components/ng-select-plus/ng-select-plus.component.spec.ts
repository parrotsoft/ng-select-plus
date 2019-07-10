import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectPlusComponent } from './ng-select-plus.component';

describe('NgSelectPlusComponent', () => {
  let component: NgSelectPlusComponent;
  let fixture: ComponentFixture<NgSelectPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSelectPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSelectPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
