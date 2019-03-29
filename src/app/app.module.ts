import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AngularMaterialModules} from './modules/angular-material.modules';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModules} from './modules/router.modules';
import { HttpClientModule} from '@angular/common/http';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import { MainComponent } from './main/main.component';
import {AddProductDialogComponent} from './main/inventory/add-product-dialog/add-product-dialog.component';
import {InventoryComponent} from './main/inventory/inventory.component';
import {AddProductAndCategoryComponent} from './main/add-product-and-category/add-product-and-category.component';
import {DataService} from './services/data.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    InventoryComponent,
    AddProductDialogComponent,
    AddProductAndCategoryComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    RouterModules,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    AddProductDialogComponent
  ],
  providers: [
    DataService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
