import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ValidationServices} from '../services/validation.services';
// noinspection JSAnnotator
@Directive({
  selector: '[appAsyncSignupShopNameValidation]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: SignupShopNameValidationDirective,
    multi: true
  }]
})
export class SignupShopNameValidationDirective implements AsyncValidator{
  constructor(private validationServices: ValidationServices) {}
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return  this.validationServices.signupShopNameValidation(control.value).pipe(
      map(isTaken => (isTaken['shopName'] ? { shopName: isTaken['message'] } : null)),
      catchError(() => null)
    );
  }
}
