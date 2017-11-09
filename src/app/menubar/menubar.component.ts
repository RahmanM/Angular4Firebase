import { Component, OnInit } from '@angular/core';
import { AuthService, LoginSummary } from "../services/AuthService";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private authService : AuthService) { }

  loginSummary = new LoginSummary();

  ngOnInit() {
    this.authService.loginState().subscribe(l=> {
      this.loginSummary = l;
    })
  }

  logout = () => {
    this.authService.logout();
  }

}
