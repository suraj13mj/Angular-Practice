import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableLikeComponent } from './reusable-like.component';

describe('ReusableLikeComponent', () => {
  let component: ReusableLikeComponent;
  let fixture: ComponentFixture<ReusableLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReusableLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
