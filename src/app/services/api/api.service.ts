import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs: AngularFirestore) { }
cart = [];
total;
a;
b;
  /* User */
  // Create User
createUser(uid, data) {
  return this.afs.doc('user/' + uid).set(data);
}

getuser(uid) {
  return this.afs.doc('user/' + uid).valueChanges();
}

/* Products */

// Create

createProduct(data) {
  return this.afs.collection('products/').add(data);
}

// Get Products

getProducts() {
  return this.afs.collection('products').snapshotChanges();
}

getProductDetails() {
  return this.afs.collection('products').snapshotChanges();
}

getSingleProductDetails(id) {
  return this.afs.doc('products/' + id).valueChanges();
}

// Add to Cart

addtoCart(x) {
   this.cart.push(x);
}

getCart() {
  return this.cart;
}

getTotal() {
  // return this.cart.reduce (( this.a.price , this.b) , 0);
  // this.cart.reduce(function(a, b) { return a + b; }, 0);
}

}
