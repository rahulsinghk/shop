import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
// noinspection JSAnnotator
@Directive({
  selector: '[appSignupEqualPasswordValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: SignupEqualPasswordValidationDirective,
    multi: true
  }]
})
export class SignupEqualPasswordValidationDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: string} |  null {
    return  control.parent.get('password').value !== control.value ? {password: 'Password Don\'t Match'} : null;
  }
}
