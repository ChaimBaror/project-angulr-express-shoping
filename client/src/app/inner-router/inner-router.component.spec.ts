import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerRouterComponent } from './inner-router.component';

describe('InnerRouterComponent', () => {
  let component: InnerRouterComponent;
  let fixture: ComponentFixture<InnerRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
