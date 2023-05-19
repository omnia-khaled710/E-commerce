import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCartComponent } from './add-cart/add-cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [

{path:'',component:ProductListComponent},
{path:'product/:id',component:ProductDetailesComponent},
{path:'products',component:ProductListComponent},
{path:'add-cart',component:AddCartComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
