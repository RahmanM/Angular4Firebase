import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard } from "../auth.guard";
import { TodoComponent } from "./todo/todo.component";

export const appRoutes: Routes = [
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'Todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'Login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

export const routes = RouterModule.forRoot(appRoutes);