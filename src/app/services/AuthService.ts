import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import * as firebase from 'firebase';
import { Subject } from "rxjs/Subject";

@Injectable()
export class AuthService {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  guard = () : void => {
    this.auth.authState.subscribe(res => {
      if (!res || !res.uid) {
        this.router.navigate(["Login"]);
      }
    });
  }

  login = () : Observable<Promise<any>> => {
    var provider = new firebase.auth.GoogleAuthProvider();
    var result = this.auth.auth.signInWithPopup(provider);
    return Observable.fromPromise(result);
  }

  loginState = () : Observable<LoginSummary> => {
    /* Example of returning Observable from inside a Subscription!! */
    var login = new LoginSummary();
    let subject = new Subject<LoginSummary>();

    this.auth.authState.subscribe(res => {
      if (res && res.uid) {
        login.state = true;
        login.userName = res.providerData[0].displayName;
        login.imageUrl = res.providerData[0].photoURL;
        subject.next(login);
        subject.complete();
      }
    });

    let result  = subject.asObservable();
    return result;
  }

  logout = () => {
    this.auth.auth.signOut().then(function () {
      this.router.navigate(["/"]);
    });
  }

}

export class LoginSummary {
  imageUrl: string;
  userName: string;
  state: boolean;
}