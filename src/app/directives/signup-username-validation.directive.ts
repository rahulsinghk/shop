import {Directive} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ValidationServices} from '../services/validation.services';
// noinspection JSAnnotator
@Directive({
  selector: '[appAsyncSignupUsernameValidation]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: SignupUsernameValidationDirective,
    multi: true
  }]
})
export class SignupUsernameValidationDirective implements AsyncValidator{
  constructor(private validationServices: ValidationServices) {}
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return  this.validationServices.signupUsernameValidation(control.value).pipe(
      map(isTaken => (isTaken['username'] ? { username: isTaken['message'] } : null)),
      catchError(() => null)
    );
  }
}
