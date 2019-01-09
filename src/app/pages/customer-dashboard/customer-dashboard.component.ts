import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private api: ApiService) { }
products;
cart = [];
  ngOnInit() {
    this.getProducts();
  }

getProducts() {
  this.api.getProducts().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data();
      const id = a.payload.doc.id;
      return { id, ...data };
    }))).subscribe(res => {
        this.products = res;
    });
}

Cart(x) {
   console.log(x);
  this.api.addtoCart(x);
}

}
