import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import { Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {HttpClient} from '@angular/common/http';
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
export interface UserData {
  product_id: number;
  product_name: string;
  product_price: number;
  product_brand: string;
}

let TREE_DATA: FoodNode[];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  animal: string;
  name: string;
  private shop_details;

  displayedColumns: string[] = ['id', 'name', 'price', 'brand', 'action'];
  data: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UserData>;

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private dataService: DataService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar) {
    TREE_DATA = this.dataService.data;
    this.dataSource.data = TREE_DATA;
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
   const users = [

    ];
    // Assign the data to the data source for the table to render
    this.data = new MatTableDataSource(users);
  }

  // dialog
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

  ngOnInit() {
    this.shop_details = this.dataService.shop_details;
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  onClickLeaf(node) {
    this.data = new MatTableDataSource(node.products);
    this.table.renderRows();
    // console.log(this.table);
  }
  onDelete(product) {
    console.log(this.dataService.shop_details.data.shop_id);
    console.log(product.product_id);
    this.httpClient.post('http://localhost/php/api/write/delete_product.php',
      {shop_id: this.dataService.shop_details.data.shop_id, product_id: product.product_id}).subscribe(res => {
      console.log(res);
      this.snackBar.open(res['message'], 'Dismiss', {
        duration: 1000
      });
      this.dataService.updateInventory();
      this.shop_details = this.dataService.shop_details;
      TREE_DATA = this.dataService.data;
      this.dataSource.data = TREE_DATA;
    }, error => {
      console.log(error);
    });

  }
}

