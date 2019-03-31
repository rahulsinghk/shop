import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule, MatSortModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const components = [
  MatInputModule,
  MatButtonModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatSelectModule,
  MatTreeModule,
  MatCardModule,
  MatRippleModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatDialogModule,
  MatChipsModule,
  MatListModule,
  MatSnackBarModule
];

@NgModule({
  imports: components,
  exports: components
})
export class AngularMaterialModules { }
