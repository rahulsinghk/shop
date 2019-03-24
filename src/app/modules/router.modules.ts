import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppComponent} from '../app.component';
import {LoginComponent} from '../login/login.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {InventoryComponent} from '../inventory/inventory.component';


export const appRoute: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'inventory', component: InventoryComponent}
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
