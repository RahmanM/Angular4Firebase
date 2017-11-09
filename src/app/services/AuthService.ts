import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  imageUrl: string;
  userName: string;
  state: boolean;

  constructor(private auth: AngularFireAuth, private router: Router) { }

  guard() {
    this.auth.authState.subscribe(res => {
      if (!res || !res.uid) {
        this.router.navigate(["Login"]);
      }
    });
  }

  login() : Observable<Promise<any>> {

    var provider = new firebase.auth.GoogleAuthProvider();
    var result = this.auth.auth.signInWithPopup(provider);
    return Observable.fromPromise(result);
  }

  loginState(): Observable<LoginSummary> {

    var login = new LoginSummary();
    this.auth.authState.subscribe(res => {
      if (res && res.uid) {
        login.state = true;
        login.userName = res.providerData[0].displayName;
        login.imageUrl = res.providerData[0].photoURL;
        return Observable.of(login);
      // } else {
      //   login.state = false;
      }
    });

    return Observable.of(login);

  }

}

export class LoginSummary {
  imageUrl: string;
  userName: string;
  state: boolean;
}