import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router , private auth: AuthService , private api: ApiService) { }

  user = {
    email: '',
    password: '',
    type: ''
  };

  err;
  data;

  ngOnInit() {
  }


login() {
  this.auth.login(this.user.email , this.user.password).then(res => {
    // now check the id whether seller or customer
   this.api.getuser(res.user.uid).subscribe(resp => {
     this.data = resp;
    if (this.data.type === 'seller') {
      localStorage.setItem('uid' , res.user.uid);
      localStorage.setItem('email' , res.user.email);
      this.router.navigate(['/seller-dashboard']);
    } else {
      localStorage.setItem('uid' , res.user.uid);
      localStorage.setItem('email' , res.user.email);
      this.router.navigate(['/customer-dashboard']);
    }
   });
  }, err => {
    this.err = err;
    setTimeout(() => this.err = '', 3000 );
  });
}


}
