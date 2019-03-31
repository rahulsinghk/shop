import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpClient: HttpClient, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    // this.httpClient.post();
  }
  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.httpClient.post('http://localhost/php/api/shop_details.php', loginForm.value)
        .subscribe((response) => {
        console.log(response);
        this.dataService.shop_details = response;
        this.httpClient.post('http://localhost/php/api/product_by_shop_details.php', {shop_id: response.data.shop_id})
          .subscribe(res => {
            console.log(res);
            this.dataService.data = res;
            this.router.navigate(['/main']);
          }, err => {
            console.log(err);
          });
      }, error => {
        console.log(error);
      });
    }
  }
}
