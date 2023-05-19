import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeeMorePipe } from './see-more.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    ProductDetailesComponent,
    ProductCardComponent,
    NavbarComponent,
    NotFoundComponent,
    AddCartComponent,
    LoginComponent,
    RegisterComponent,
    SeeMorePipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DecimalPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
