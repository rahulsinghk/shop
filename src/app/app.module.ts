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
import {DataService} from './services/data.service';
import {FormsModule} from '@angular/forms';
import {ValidationServices} from './services/validation.services';
import {LoginUsernameValidationDirective} from './directives/login-username-validation.directive';
import {LoginPasswordValidationDirective} from './directives/login-password-validation.directive';
import {SignupEmailValidationDirective} from './directives/signup-email-validation.directive';
import {SignupShopNameValidationDirective} from './directives/signup-shop-name-validation.directive';
import {SignupUsernameValidationDirective} from './directives/signup-username-validation.directive';
import {SignupEqualPasswordValidationDirective} from './directives/signup-equal-password-validation.directive';
import { ViewProductDetailsComponent } from './main/view-product-details/view-product-details.component';
import {ClipboardModule} from 'ngx-clipboard';
import {RouteReuseStrategy} from '@angular/router';
import {CustomRouteReuse} from './main/route-reuse/custom-route-reuse';
import { AccountComponent } from './main/account/account.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    InventoryComponent,
    AddProductDialogComponent,
    MainComponent,
    LoginPasswordValidationDirective,
    LoginUsernameValidationDirective,
    SignupUsernameValidationDirective,
    SignupShopNameValidationDirective,
    SignupEmailValidationDirective,
    SignupEqualPasswordValidationDirective,
    ViewProductDetailsComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    RouterModules,
    HttpClientModule,
    FormsModule,
    ClipboardModule
  ],
  entryComponents: [
    AddProductDialogComponent
  ],
  providers: [
    DataService,
    ValidationServices,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: true}},
    {provide: RouteReuseStrategy, useClass: CustomRouteReuse}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
