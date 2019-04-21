import { Component, OnInit } from '@angular/core';
import {SharedBrowseProductAndCategoryService} from '../module/services/shared-browse-product-and-category.service';
import {DataService} from '../../../services/data.service';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  // private service: SharedBrowseProductAndCategoryService;

  constructor(
    private service: SharedBrowseProductAndCategoryService,
    private dataService: DataService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }
  onAdd(product) {
    console.log(product);
    console.log(this.dataService.shop_details);
    this.httpClient.post('http://localhost/php/api/write/add_existing_product.php',
      {shop_id: this.dataService.shop_details.data.shop_id, product_id: product.product_id}).subscribe(res => {
      console.log(res);
      this.snackBar.open(res['message'], 'Dismiss', {
        duration: 1000
      });
      this.dataService.updateInventory();
    }, error => {
      console.log(error);
    });

  }
  onView(product) {
    this.dataService.viewProduct = product;
    this.router.navigate(['/main/browse/viewProduct']);
  }
  onSelect(index: number) {
    this.service.breadCrum.push({index: index, name:  this.service.productCategory[index].name, category_type_id_child: this.service.productCategory[index].category_type_id_child, category_index_id: this.service.productCategory[index].index_id,});
    if (this.service.productCategory[index].children.length === 0 && this.service.productCategory[index].products.length === 0) {
      console.log(this.service.productCategory[index]);
      this.service.productCategory = this.service.productCategory[index].children;
      this.service.productList = this.service.productCategory[index].products;
    } else if (this.service.productCategory[index].children.length === 0) {
      this.service.productList = this.service.productCategory[index].products;
      // console.log(this.service.productList);
      this.service.productCategory = this.service.productCategory[index].children;
    } else {
      this.service.productCategory = this.service.productCategory[index].children;
      this.service.productList = [];
    }
  }
}
