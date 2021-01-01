import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariableComponent } from './template-variable.component';

describe('TemplateVariableComponent', () => {
  let component: TemplateVariableComponent;
  let fixture: ComponentFixture<TemplateVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
