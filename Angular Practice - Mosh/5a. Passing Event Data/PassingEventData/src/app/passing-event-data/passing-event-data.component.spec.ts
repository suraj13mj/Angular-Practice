import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingEventDataComponent } from './passing-event-data.component';

describe('PassingEventDataComponent', () => {
  let component: PassingEventDataComponent;
  let fixture: ComponentFixture<PassingEventDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassingEventDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingEventDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
