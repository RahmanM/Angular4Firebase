import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../services/AuthService';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private db: AngularFireDatabase,
               private authService: AuthService,
               private af: AngularFireAuth,
               private router: Router) {

     authService.guard();
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:one-line
  logout(){
     this.af.auth.signOut().then(() => {
      this.router.navigate(['Login']);
    });
  }

}
