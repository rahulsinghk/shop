import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {ValidationServices} from '../services/validation.services';
import {catchError, map} from 'rxjs/operators';


// noinspection JSAnnotator
@Directive({
  selector: '[appAsyncLoginPasswordValidation]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: LoginPasswordValidationDirective,
    multi: true
  }]
})
export class LoginPasswordValidationDirective implements AsyncValidator {
  constructor(private validationServices: ValidationServices) {}

  // @Input() appNotExist: {username: string, password: string};

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // console.log(control.value);
    return  this.validationServices.loginPasswordValidation(control.parent.value.username, control.value).pipe(
      map(isTaken => (isTaken['password'] ? { password: isTaken['message'] } : null)),
      catchError(() => null)
    );
  }

}
