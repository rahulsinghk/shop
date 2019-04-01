import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {

  constructor(private dataService: DataService) { }
  private viewProduct = this.dataService.viewProduct;
  ngOnInit() {
  }

}
