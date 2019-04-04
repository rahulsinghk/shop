import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appAddCategoryValidationDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AddCategoryValidationDirective,
    multi: true
  }]
})

export class AddCategoryValidationDirective implements Validator {

  @Input() appAddCategoryValidationDirective;
  validate(control: AbstractControl): {[key: string]: string} | null {
    if (this.appAddCategoryValidationDirective.parent.name === control.value.trim().replace(/ +/g, ' ')) {
      return {parent: 'Category Name Cannot Equal to Parent Category'};
    } else if (this.appAddCategoryValidationDirective.children.includes(control.value.trim().replace(/ +/g, ' '))) {
      return {children: 'Category Already Exist'};
    } return null;
  }
}
