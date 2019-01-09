import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private api: ApiService) { }
  user = {
    type: '',
    email: '',
    password: ''
  };
  err;
  ngOnInit() {
  }
signup() {
  this.auth.signup(this.user.email , this.user.password).then(res => {
    // creating user
    this.api.createUser(res.user.uid , this.user).then(resp => {
      if (res) {
        localStorage.setItem('uid', res.user.uid);
        localStorage.setItem('email', res.user.email);
        // localStorage.setItem('type', res.user.type)
      }
    });

  });
}

}
