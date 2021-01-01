import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforChangeDetectionComponent } from './ngfor-change-detection.component';

describe('NgforChangeDetectionComponent', () => {
  let component: NgforChangeDetectionComponent;
  let fixture: ComponentFixture<NgforChangeDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforChangeDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
