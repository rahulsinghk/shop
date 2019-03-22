import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AngularMaterialModules} from './modules/angular-material.modules';
import { SignUpComponent } from './sign-up/sign-up.component';
import {RouterModules} from './modules/router.modules';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModules,
    RouterModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
