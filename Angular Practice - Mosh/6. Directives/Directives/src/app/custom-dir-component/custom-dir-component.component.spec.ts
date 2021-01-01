import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirComponentComponent } from './custom-dir-component.component';

describe('CustomDirComponentComponent', () => {
  let component: CustomDirComponentComponent;
  let fixture: ComponentFixture<CustomDirComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
