import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AuthService } from "../services/AuthService";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  state: boolean;
  imageUrl: string;
  redirected: false;

  constructor(private af: AngularFireAuth, private router: Router, private authService: AuthService) {
  }

  public ngOnInit(): void {

    this.authService.loginState().subscribe(s=>{
      this.userName = s.userName;
      this.state = s.state;
      this.imageUrl = s.imageUrl;
      if(s.state){
        this.router.navigate(["Todo"])
      }
    });

  }

  login() {
    this.authService.login().subscribe(s=> {
      this.router.navigate(["Todo"]);
    });
  }

  loginFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();
    this.af.auth.signInWithPopup(provider).then(() => {
      this.router.navigate(["Todo"]);
    });
  }

  logout() {
    this.af.auth.signOut().then(function () {
      this.router.navigate(["/"]);
    });
  }

}
