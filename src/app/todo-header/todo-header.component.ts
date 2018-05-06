import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Todo, Category } from '../modals/Todo';
import { TodoService } from '../services/TodoService';
import { NotificationService } from '../services/NotificationService';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs/Rx';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit, OnDestroy {
  categoryLoadSubscription: Subscription;

  todo: Todo = new Todo('', false, false, 1);
  categories = new Array<Category>();

  constructor(private todoService: TodoService,
              private notificationService: NotificationService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryLoadSubscription = this.categoryService.loadCategories().subscribe(c => this.categories = c);
  }

  ngOnDestroy(): void {
    this.categoryLoadSubscription.unsubscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(
      new Todo(todo.Description.toUpperCase(), false, true, todo.CategoryId)
    ).filter(r=> r === true).distinctUntilChanged().subscribe(a => {
      // this.notificationService.notifyTodoAdded(this.todo);
      this.todo = new Todo('', false, false, 1);
    });
  }
}
