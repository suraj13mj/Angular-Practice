import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerPanelComponent } from './ng-container-panel.component';

describe('NgContainerPanelComponent', () => {
  let component: NgContainerPanelComponent;
  let fixture: ComponentFixture<NgContainerPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContainerPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContainerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
