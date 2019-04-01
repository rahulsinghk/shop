import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private shop_types: Object = [];
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    this.httpClient.get('http://localhost/php/api/all_shop_type.php').subscribe(res => {
      // @ts-ignore
      this.shop_types = res;
    }, error => {
      console.log(error);
    });
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(form.value);
      this.httpClient.post('http://localhost/php/api/write/new_shopkeeper.php', form.value).subscribe(res => {
        console.log(res);
        this.router.navigate(['logIn']);
      }, err => {
        console.log(err);
      });
    }
  }
}
