import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatBottomSheet, MatSnackBar} from '@angular/material';
import {AddOptionBottomSheetComponent} from './add-option-bottom-sheet/add-option-bottom-sheet.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product-and-category',
  templateUrl: './add-product-and-category.component.html',
  styleUrls: ['./add-product-and-category.component.css']
})
export class AddProductAndCategoryComponent implements OnInit {
  private data;
  private tempData;
  private tempArray;
  private breadCrum = [];
  private  products = [];
  constructor(
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private httpClient: HttpClient,
    private router: Router) {
  }

  ngOnInit() {
    this.data = this.dataService.allProductDetails;
    console.log(this.data);
  }
  onReset() {
    this.data = this.dataService.allProductDetails;
    this.breadCrum = [];
    this.products = [];
  }
  onJump(index: number) {
    this.products = [];
    this.tempData = this.dataService.allProductDetails;
    this.tempArray = [];
    for (let i = 0; i <= index; i++) {
      this.tempData = this.tempData[this.breadCrum[i].id].children;
      this.tempArray.push(this.breadCrum[i]);
    }
    this.data = this.tempData;
    this.breadCrum = this.tempArray;
  }
  onSelect(index: number) {
    // console.log(this.data);
    this.breadCrum.push({id: index, name:  this.data[index].name});
    if (this.data[index].children === undefined && this.data[index].products === undefined) {
      this.data = [];
      this.products = [];
    } else if (this.data[index].children === undefined) {
      // console.log(this.data[index]);
      this.products = this.data[index].products;
      this.data = [];
    } else {
      this.data = this.data[index].children;
      this.products = [];
    }
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
  onAddItem() {
    if (this.products.length) {
      console.log('Add Product');
    } else if (this.data.length) {
      console.log('Add Category');
    } else {
      const bottomSheetRef = this.bottomSheet.open(AddOptionBottomSheetComponent, {
        data: { names: ['Frodo', 'Bilbo'] },
      });
      bottomSheetRef.afterDismissed().subscribe((result) => {
        console.log(result);
      });
    }
  }
  onView(product) {
    this.dataService.viewProduct = product;
    this.router.navigate(['/main/viewProduct']);
  }
}
