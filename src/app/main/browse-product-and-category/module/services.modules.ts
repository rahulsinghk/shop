import {NgModule} from '@angular/core';
import {SharedBrowseProductAndCategoryService} from './services/shared-browse-product-and-category.service';
import {AddProductComponent} from '../add-product/add-product.component';
import {ViewProductComponent} from '../view-product/view-product.component';
import {ViewCategoryComponent} from '../view-category/view-category.component';
import {AngularMaterialModules} from '../../../modules/angular-material.modules';
import {BrowseProductAndCategoryRouterModules} from './routes/router.module';
import {CommonModule} from '@angular/common';
import {BrowseProductAndCategoryComponent} from '../browse-product-and-category.component';
import {AddOptionBottomSheetComponent} from '../add-option-bottom-sheet/add-option-bottom-sheet.component';
import {AddCategoryDialogueComponent} from '../add-category-dialogue/add-category-dialogue.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {AddCategoryValidationDirective} from '../directives/add-category-validation.directive';


@NgModule({
  declarations: [
    AddProductComponent,
    ViewProductComponent,
    ViewCategoryComponent,
    ViewProductComponent,
    BrowseProductAndCategoryComponent,
    AddCategoryDialogueComponent,
    AddOptionBottomSheetComponent,
    AddCategoryValidationDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModules,
    BrowseProductAndCategoryRouterModules,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    AddCategoryDialogueComponent,
    AddOptionBottomSheetComponent
  ],
  providers: [
    SharedBrowseProductAndCategoryService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, disableClose: false}},
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: true, restoreFocus: false}}
  ]
})
export class BrowsProductAndCategoryModules {
}
