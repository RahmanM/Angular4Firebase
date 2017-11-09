
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Todo, Category } from '../modals/Todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {

  private baseUrl = 'http://localhost/Angular4Todo/api/';
  // private url : string = "http://localhost:5898/api/todo";
  constructor(private httpClient: HttpClient) {

  }

  loadTodos = (): Observable<Array<Todo>> => {
    const response = this.httpClient.get<Array<Todo>>(this.baseUrl + 'todo');
    return response;
  }

  addTodo = (todo: Todo): Observable<Todo> => {
    const response = this.httpClient.post<Todo>(this.baseUrl + 'todo', todo);
    return response;
  }

  deleteTodo = (id: string): Observable<number> => {
    const response = this.httpClient.delete<any>(this.baseUrl + 'todo/' + id.split('/')[1]);
    return response;
  }

  updateTodo = (todo: Todo): Observable<Todo> => {
    const response = this.httpClient.put<Todo>(this.baseUrl + 'todo', todo);
    return response;
  }

  loadCategories = (): Observable<Array<Category>> => {
    const response = this.httpClient.get<Array<Category>>(this.baseUrl + 'category');
    return response;
  }

}

