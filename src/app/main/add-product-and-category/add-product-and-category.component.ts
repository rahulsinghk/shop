import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatSnackBar} from '@angular/material';

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
  constructor(private dataService: DataService, private snackBar: MatSnackBar) {
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
    if (this.data[index].children === undefined) {
      console.log(this.data[index]);
      this.products = this.data[index].products;
      this.data = [];
    } else {
      this.data = this.data[index].children;
      this.products = [];
    }
  }
  onAdd(message) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 1000
    });
  }
}
