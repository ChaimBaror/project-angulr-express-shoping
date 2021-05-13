import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdctComponent } from './add-prodct.component';

describe('AddProdctComponent', () => {
  let component: AddProdctComponent;
  let fixture: ComponentFixture<AddProdctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProdctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
