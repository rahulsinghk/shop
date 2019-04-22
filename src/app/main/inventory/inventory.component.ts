import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {HttpClient} from '@angular/common/http';
interface ProductCategory {
  name: string;
  children?: ProductCategory[];
}

export interface Product {
  product_id: number;
  product_name: string;
  product_price: number;
  product_brand: string;
}

let TREE_DATA: ProductCategory[];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  animal: string;
  name: string;
  private shop_details;

  displayedColumns: string[] = ['product_id', 'product_name', 'product_price', 'product_brand', 'action'];
  tableData: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;

  treeControl = new NestedTreeControl<ProductCategory>(node => node.children);
  treeDataSource = new MatTreeNestedDataSource<ProductCategory>();
  private tableContent;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private dataService: DataService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) {
    this.dataService.updateInventory()
      .subscribe(response => {
        console.log(response);
        this.dataService.data = response;
        TREE_DATA = this.dataService.data;
        this.treeDataSource.data = TREE_DATA;
      }, err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.shop_details = this.dataService.shop_details;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onDelete(product) {
    console.log(this.dataService.shop_details.data.shop_id);
    console.log(product.product_id);
    this.httpClient.post('http://localhost/php/api/write/delete_product.php',
      {shop_id: this.dataService.shop_details.data.shop_id, product_id: product.product_id}).subscribe(res => {
        console.log(res);
        const index = this.tableContent.indexOf(product);
        if (index > -1) {
          this.tableContent.splice(index, 1);
        }
        this.updateTable(this.tableContent);
        this.snackBar.open(res['message'], 'Dismiss', {
          duration: 1000
        });
        this.dataService.updateInventory()
          .subscribe(response => {
            console.log(response);
            this.dataService.data = response;
            TREE_DATA = this.dataService.data;
            this.treeDataSource.data = TREE_DATA;
          }, err => {
            console.log(err);
          });
        this.shop_details = this.dataService.shop_details;
    }, error => {
      console.log(error);
    });
  }

  onView(product) {
    console.log(product);
    this.dataService.viewProduct = product;
    this.router.navigate(['main/viewProductDetails']).then();
  }

  updateTable(productList) {
    this.tableData = new MatTableDataSource(productList);
    this.tableData.paginator = this.paginator;
    this.tableData.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.tableData.filter = filterValue.trim().toLowerCase();
    if (this.tableData.paginator) {
      this.tableData.paginator.firstPage();
    }
  }

  hasChild = (_: number, node: ProductCategory) => !!node.children && node.children.length > 0;
  onClickLeaf(node) {
    this.tableContent = node.products;
    this.updateTable(node.products);
  }
}

