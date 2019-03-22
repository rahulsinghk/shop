import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material';


@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ]
})
export class AngularMaterialModules { }
