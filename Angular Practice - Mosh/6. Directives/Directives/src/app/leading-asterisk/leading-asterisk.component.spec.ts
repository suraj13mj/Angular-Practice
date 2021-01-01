import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingAsteriskComponent } from './leading-asterisk.component';

describe('LeadingAsteriskComponent', () => {
  let component: LeadingAsteriskComponent;
  let fixture: ComponentFixture<LeadingAsteriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadingAsteriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadingAsteriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
