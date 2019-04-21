import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatBottomSheet, MatDialog, MatSnackBar} from '@angular/material';
import {AddOptionBottomSheetComponent} from './add-option-bottom-sheet/add-option-bottom-sheet.component';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SharedBrowseProductAndCategoryService} from './module/services/shared-browse-product-and-category.service';
import {AddCategoryDialogueComponent} from './add-category-dialogue/add-category-dialogue.component';
import {share} from 'rxjs/operators';


@Component({
  selector: 'app-browse-add-product-and-category',
  templateUrl: './browse-product-and-category.component.html',
  styleUrls: ['./browse-product-and-category.component.css']
})
export class BrowseProductAndCategoryComponent implements OnInit {
  private tempData;
  private tempArray;
  private service: SharedBrowseProductAndCategoryService;
  constructor(
    private dialog: MatDialog,
    private dataService: DataService,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private httpClient: HttpClient,
    private router: Router,
    private sharedBrowseProductAndCategoryService: SharedBrowseProductAndCategoryService) {
    this.service = this.sharedBrowseProductAndCategoryService;
  }

  ngOnInit() {
    this.service.productList = [];
    this.service.breadCrum = [];
    this.service.productCategory = this.dataService.allProductDetails;
    console.log(this.dataService.allProductDetails);
    this.router.navigate(['main/browse/viewCategory']).then();
  }
  onReset() {
    this.service.productCategory = this.dataService.allProductDetails;
    this.service.breadCrum = [];
    this.service.productList = [];
  }
  onJump(index: number) {
    console.log(this.dataService.allProductDetails);
    this.tempData = this.dataService.allProductDetails;
    this.tempArray = [];
    for (let i = 0; i <= index; i++) {
      this.tempData = this.tempData[this.service.breadCrum[i].index].children;
      this.tempArray.push(this.service.breadCrum[i]);
    }
    if (this.tempData.length !== 0) { this.service.productList = []; }
    this.service.productCategory = this.tempData;
    this.service.breadCrum = this.tempArray;

  }
  openDialog(): void {
    const res = {};
    const dialogRef = this.dialog.open(AddCategoryDialogueComponent, {
      width: '400px',
      data: {parent: this.service.breadCrum[this.service.breadCrum.length - 1], children: this.service.productCategory.map(value => value.name.toLowerCase().trim().replace(/ */g, ''))}
    });
    dialogRef.afterClosed().subscribe(result => {
      res['category'] = result.category;
      res['category_type_id_child'] = this.service.breadCrum[this.service.breadCrum.length - 1] ? this.service.breadCrum[this.service.breadCrum.length - 1].category_type_id_child : 30;
      this.httpClient.post('http://localhost/php/api/write/add_category.php', res).pipe(share())
      .subscribe(response => {
        console.log(response);
        this.service.productCategory.push(response);
      }, error => {
        console.log(error);
      });
    });
  }
  //

  onAddItem() {
    if (this.service.productList.length) {
      this.router.navigate(['main/browse/addProduct']).then();
    } else if (this.service.productCategory.length) {
      console.log('Add Category');
      this.openDialog();
    } else {
      const bottomSheetRef = this.bottomSheet.open(AddOptionBottomSheetComponent, {
        data: { names: ['sampleData', 'sampleData'] },
      });
      bottomSheetRef.afterDismissed().subscribe((result) => {
        if (result === 'product') {
          this.router.navigate(['main/browse/addProduct']).then();
        } else if (result === 'category') {
          this.openDialog();
        }
      });
    }
  }

}

