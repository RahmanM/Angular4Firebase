import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoService } from './services/TodoService';
import { TodoCountsComponent } from './todo-counts/todo-counts.component';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoPipePipe, CategoryPipe, CountPipe } from './todo-pipe.pipe';
import { SpinnerComponent } from './spinner-component/spinner-component.component';
import { TodoCategoryComponent } from './todo-category/todo-category.component';
import { NotificationService } from './services/NotificationService';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes } from "./app.routes";
import { AngularFireAuth } from "angularfire2/auth";
import { AuthGuard } from "../auth.guard";
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";
import { environment } from "../environments/environment";
import { AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { TodoComponent } from './todo/todo.component';
import { AuthService } from "./services/AuthService";
import { MenubarComponent } from './menubar/menubar.component';
import { CategoryService } from "./services/category.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoDetailComponent,
    TodoCountsComponent,
    TodoSearchComponent,
    CountPipe,
    TodoPipePipe,
    CategoryPipe,
    SpinnerComponent,
    TodoCategoryComponent,
    PopupComponent,
    LoginComponent,
    NotFoundComponent,
    TodoComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule,
    routes
  ],
  providers: [
                TodoService, 
                CategoryService,
                NotificationService, 
                AngularFireAuth, 
                RouterModule, 
                AuthGuard,
                AuthService],
  bootstrap: [LoginComponent]
})
export class AppModule { }