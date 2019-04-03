import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  private viewProduct = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
  this.viewProduct = this.dataService.viewProduct;
  }

}
