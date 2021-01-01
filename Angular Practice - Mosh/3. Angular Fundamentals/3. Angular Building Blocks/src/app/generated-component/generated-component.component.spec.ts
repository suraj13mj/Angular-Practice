import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedComponentComponent } from './generated-component.component';

describe('GeneratedComponentComponent', () => {
  let component: GeneratedComponentComponent;
  let fixture: ComponentFixture<GeneratedComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
