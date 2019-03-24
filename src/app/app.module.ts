import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AngularMaterialModules} from './modules/angular-material.modules';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModules} from './modules/router.modules';
import { InventoryComponent } from './inventory/inventory.component';
import { HttpClientModule} from '@angular/common/http';
import { AddProductDialogComponent } from './inventory/add-product-dialog/add-product-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    InventoryComponent,
    AddProductDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    RouterModules,
    HttpClientModule
  ],
  entryComponents: [
    AddProductDialogComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
