import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import { Router} from '@angular/router';
import {DataService} from '../../services/data.service';
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
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


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

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(public dialog: MatDialog, private router: Router, private dataService: DataService) {
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
  }
}
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
