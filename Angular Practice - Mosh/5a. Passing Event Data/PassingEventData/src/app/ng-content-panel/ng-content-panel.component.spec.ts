import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentPanelComponent } from './ng-content-panel.component';

describe('NgContentPanelComponent', () => {
  let component: NgContentPanelComponent;
  let fixture: ComponentFixture<NgContentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
