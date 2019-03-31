import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ValidationServices} from '../services/validation.services';
// noinspection JSAnnotator
@Directive({
  selector: '[appAsyncSignupEmailValidation]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: SignupEmailValidationDirective,
    multi: true
  }]
})
export class SignupEmailValidationDirective implements AsyncValidator {
  constructor(private validationServices: ValidationServices) {}
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return  this.validationServices.signupEmailValidation(control.value).pipe(
      map(isTaken => (isTaken['email'] ? { email: isTaken['message'] } : null)),
      catchError(() => null)
    );
  }
}
