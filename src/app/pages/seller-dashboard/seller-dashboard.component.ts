import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent implements OnInit {

  constructor(private api: ApiService) { }
product = {
  name: '',
  price: '',
  status: ''
};
  ngOnInit() {
  }

addProduct() {
  this.api.createProduct(this.product).then(res => {
    console.log('product created!');
  });
}

}
