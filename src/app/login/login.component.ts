import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    // this.httpClient.post();
  }
  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.httpClient.post('http://localhost/php/api/authentication.php', loginForm.value)
        .subscribe((response) => {
        console.log(response);
      }, error => {
        console.log(error);
      });
    }
  }
  onView(loginForm: NgForm) {
    console.log(loginForm);
  }
}
