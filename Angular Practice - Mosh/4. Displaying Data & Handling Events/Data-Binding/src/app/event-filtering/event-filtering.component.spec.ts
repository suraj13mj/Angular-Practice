import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilteringComponent } from './event-filtering.component';

describe('EventFilteringComponent', () => {
  let component: EventFilteringComponent;
  let fixture: ComponentFixture<EventFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
