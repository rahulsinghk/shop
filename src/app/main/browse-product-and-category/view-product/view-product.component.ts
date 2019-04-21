import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';
import {forEach} from '@angular/router/src/utils/collection';
import {HttpClient} from '@angular/common/http';
import {share} from 'rxjs/operators';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  private viewProduct: any;
  constructor(private dataService: DataService, private httpClient: HttpClient) { }
  private specification = {};
  private specificationKeys;
  private shopList;
  ngOnInit() {
  this.viewProduct = this.dataService.viewProduct;
    console.log(this.viewProduct);
    // forEach()
    if (this.viewProduct.specification.length > 0 ) {
      this.viewProduct.specification.forEach(value => {
        this.specification[value.spec_name] = [];
      });
      this.viewProduct.specification.forEach(value => {
        this.specification[value.spec_name].push(value.spec_value);
      });
    }
    this.specificationKeys = Object.keys(this.specification) || [];
    this.httpClient.post('http://localhost/php/api/all_shop_by_product.php', {product_id: this.viewProduct.product_id}).pipe(share()).subscribe(res => {
      this.shopList = res;
    }, err => {
      console.log(err);
    });
  }

}
