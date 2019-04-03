import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryDialogueComponent } from './add-category-dialogue.component';

describe('AddCategoryDialogueComponent', () => {
  let component: AddCategoryDialogueComponent;
  let fixture: ComponentFixture<AddCategoryDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
