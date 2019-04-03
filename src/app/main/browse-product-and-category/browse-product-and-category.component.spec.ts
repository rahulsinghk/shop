import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductAndCategoryComponent } from './add-product-and-category.component';

describe('AddProductAndCategoryComponent', () => {
  let component: AddProductAndCategoryComponent;
  let fixture: ComponentFixture<AddProductAndCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductAndCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductAndCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
