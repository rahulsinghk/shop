import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

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
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.data;
  }
  onReset(){
    this.data = this.dataService.data;
    this.breadCrum = [];
  }
  onJump(index: number) {
    this.tempData = this.dataService.data;
    this.tempArray = [];
    for (let i = 0; i <= index; i++) {
      this.tempData = this.tempData[this.breadCrum[i].id].children;
      this.tempArray.push(this.breadCrum[i]);
    }
    this.data = this.tempData;
    this.breadCrum = this.tempArray;
  }
  onSelect(index: number) {
    this.breadCrum.push({id: index, name:  this.data[index].name});
    if (this.data[index] === undefined) {
      this.data = [];
    }
    this.data = this.data[index].children;
  }
}
