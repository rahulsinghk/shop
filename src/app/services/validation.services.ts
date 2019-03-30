import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ValidationServices {
  constructor(private httpClient: HttpClient) {}

  isPasswordCorrect(username: string, password: string) {
    return this.httpClient.post('http://localhost/php/api/authentication.php',
      {username: username, password: password});
  }
}
