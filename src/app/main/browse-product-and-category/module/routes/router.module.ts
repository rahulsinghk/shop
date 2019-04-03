import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddProductComponent} from '../../add-product/add-product.component';
import {ViewCategoryComponent} from '../../view-category/view-category.component';
import {ViewProductComponent} from '../../view-product/view-product.component';
import {BrowseProductAndCategoryComponent} from '../../browse-product-and-category.component';


export const appChildRoute: Routes = [
  {path: '', component: BrowseProductAndCategoryComponent, children: [
      {path: '', redirectTo: 'viewCategory',  pathMatch: 'full'},
      {path: 'viewCategory', component: ViewCategoryComponent},
      {path: 'viewProduct', component: ViewProductComponent},
      {path: 'addProduct', component: AddProductComponent}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(appChildRoute)
  ],
  exports: [RouterModule]
})

export class BrowseProductAndCategoryRouterModules {
}
