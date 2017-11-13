
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Todo, Category } from '../modals/Todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class TodoService {
  todoList: AngularFireList<Todo>;

  constructor(private db: AngularFireDatabase) {
    this.todoList = this.db.list<Todo>("/todos");
  }

  // TODO: do better error handling when a doing CRUD

  loadTodos = (): Observable<Array<Todo>> => {
    var subject = new Subject<Todo[]>();
    var list = this.todoList.snapshotChanges();

    list.subscribe(s => {
      var todos = new Array<Todo>();
      s.forEach(item => {
        var todo = item.payload.toJSON() as Todo;
        todo.Key = item.key;
        todos.push(todo)
        subject.next(todos);
      })
    })

    return subject.asObservable();
  }

  addTodo = (todo: Todo): Observable<boolean> => {
    var subject = new Subject<boolean>();

    this.todoList.push(todo).then(() => {
      // NB: set timeout is needed, otherwise it won't fire the subscription!
      setTimeout(() => subject.next(true), 0);
    });

    return subject.asObservable();;
  }

  deleteTodo = (key: string): Observable<boolean> => {
    this.todoList.remove(key).then(function (result) {
      return Observable.of(true);
    })

    return Observable.of(false);
  }

  updateTodo = (todo: Todo): Observable<boolean> => {
     this.todoList.update(todo.Key, todo).then(function (result) {
      return Observable.of(true);
    })
    return Observable.of(false);
  }

}

