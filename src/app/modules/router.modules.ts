import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {MainComponent} from '../main/main.component';
import {InventoryComponent} from '../main/inventory/inventory.component';
import {ViewProductDetailsComponent} from '../main/view-product-details/view-product-details.component';


export const appRoute: Routes = [
  {path: '', component: AppComponent},
  {path: 'logIn', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'main', component: MainComponent, children: [
      {path: 'inventory', component: InventoryComponent},
      {path: 'viewProductDetails', component: ViewProductDetailsComponent},
      {path: 'browse', loadChildren: '../main/browse-product-and-category/module/services.modules#BrowsProductAndCategoryModules'},
    ]}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})

export class RouterModules {
}
