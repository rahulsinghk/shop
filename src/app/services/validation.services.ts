import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ValidationServices {
  constructor(private httpClient: HttpClient) {}

  loginUsernameValidation(username: string) {
    return this.httpClient.post('http://localhost/php/api/validation/login_username.php',
      {username: username});
  }
  loginPasswordValidation(username: string, password: string) {
    return this.httpClient.post('http://localhost/php/api/validation/login_password.php',
      {username: username, password: password});
  }
  signupEmailValidation(email: string) {
    return this.httpClient.post('http://localhost/php/api/validation/signup_email.php',
      {email: email});
  }
  signupShopNameValidation(shopName: string) {
    return this.httpClient.post('http://localhost/php/api/validation/signup_shop_name.php',
      {shopName: shopName});
  }
  signupUsernameValidation(username: string) {
    return this.httpClient.post('http://localhost/php/api/validation/signup_username.php',
      {username: username});
  }
}
