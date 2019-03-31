import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {ValidationServices} from '../services/validation.services';
import {catchError, map} from 'rxjs/operators';


// noinspection JSAnnotator
@Directive({
  selector: '[appAsyncLoginUsernameValidation]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: LoginUsernameValidationDirective,
    multi: true
  }]
})
export class LoginUsernameValidationDirective implements AsyncValidator {
  constructor(private validationServices: ValidationServices) {}

  // @Input() appNotExist: {username: string, password: string};

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    // console.log(control.value);
    return  this.validationServices.loginUsernameValidation(control.value).pipe(
      map(isTaken => (isTaken['username'] ? { username: isTaken['message'] } : null)),
      catchError(() => null)
    );
  }

}
