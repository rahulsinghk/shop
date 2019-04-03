import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptionBottomSheetComponent } from './add-option-bottom-sheet.component';

describe('AddOptionBottomSheetComponent', () => {
  let component: AddOptionBottomSheetComponent;
  let fixture: ComponentFixture<AddOptionBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOptionBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOptionBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
