import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {ValidationServices} from '../services/validation.services';
import {catchError, map} from 'rxjs/operators';


// noinspection JSAnnotator
@Directive({
  selector: '[appNotExist]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: NotExistValidationDirective,
    multi: true
  }]
})
export class NotExistValidationDirective implements AsyncValidator {
  constructor(private validationServices: ValidationServices) {}
  @Input() appNotExist: {username: string, password: string};
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return  this.validationServices.isPasswordCorrect(this.appNotExist.username, this.appNotExist.password);
  }

}
