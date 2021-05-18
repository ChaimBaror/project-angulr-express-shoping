import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProdctManagerComponent } from './all-prodct-manager.component';

describe('AllProdctManagerComponent', () => {
  let component: AllProdctManagerComponent;
  let fixture: ComponentFixture<AllProdctManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProdctManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProdctManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
