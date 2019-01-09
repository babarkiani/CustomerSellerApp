import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import {environment} from './../../../environments/environment';
import * as myGlobal from 'src/global';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
data;
total;
cart = [];
x;
handler: any;
amount: number;
  constructor(private api: ApiService, private http: Http, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
this.displayCart();
// this.route.params.subscribe(detials => {
//   this.amount = detials.price * 100;
// });

// this.handler = myGlobal.StripeCheckout.configure({
//   key: environment.stripeKey,
//   image: '',
//   locale: 'auto',
//   token: token => {
//    this.simpleHttp(this.amount, token).subscribe(res => {
//      if (res.status === 200) {
//       // console.log(token, this.amount);
//       // this.pay.processPayment(token, this.amount);
//      }
//    });
//   }
// });
  }


  // simpleHttp(amount, token) {
  //   const myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');
  //   const options = new RequestOptions({ headers: myHeaders });

  //   // callrequest
  //   return this.http.post('http://localhost:3000/payments', {
  //    amount: this.amount.toString(),
  //    token: token
  //   }, options);

  // }

  displayCart() {

   this.data = this.api.getCart();
  this.cart = this.api.getCart();
  console.log(this.cart);
  this.total = this.cart.reduce((a, b)=>{
    return a + b.price;
  }, 0)
  console.log(this.total);
 
  }


  getTotal(arr){

  }




  // handlePayment() {
  //   this.handler.open({
  //     name: 'FireStarter',
  //     description: 'Deposit Funds to Account',
  //     amount: this.amount
  //   });
  // }

  // @HostListener('window:popstate')

  // onPopState() {
  //   this.handler.close();
  // }

}
