import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import {map} from 'rxjs/operators';
import { Router, Params , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id;
  data;
  constructor(private api: ApiService, private router: ActivatedRoute ) {


   }
products;
  ngOnInit() {
    this.id = this.router.snapshot.params['id'];

    console.log(this.id);

    this.api.getSingleProductDetails(this.id).subscribe(res => {
      console.log(res);
      this.data = res;
    });



    this.getProductDetails();
  }

  getProductDetails() {
    this.api.getProducts().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))).subscribe(res => {
          this.products = res;
      });
  }

}
