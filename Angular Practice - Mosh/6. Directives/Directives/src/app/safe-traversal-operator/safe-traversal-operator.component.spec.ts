import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTraversalOperatorComponent } from './safe-traversal-operator.component';

describe('SafeTraversalOperatorComponent', () => {
  let component: SafeTraversalOperatorComponent;
  let fixture: ComponentFixture<SafeTraversalOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTraversalOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTraversalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
