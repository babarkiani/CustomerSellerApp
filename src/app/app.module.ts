import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// FireBase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';


import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './pages/orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ProductsComponent,
    SellerDashboardComponent,
    CustomerDashboardComponent,
    CartComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'signup' , component: SignupComponent},
      {path: 'customer-dashboard' , component: CustomerDashboardComponent},
      {path: 'seller-dashboard' , component: SellerDashboardComponent},
      {path: 'products/:id' , component: ProductsComponent},
      {path: 'cart' , component: CartComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
