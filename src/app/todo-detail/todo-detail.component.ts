import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../modals/Todo';
import { TodoService } from '../services/TodoService';
import { fade, highlight } from '../todo-animations/Animation';
import { NotificationService } from '../services/NotificationService';
import { Subscription } from 'rxjs/Rx';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  animations: [fade, highlight]
})
export class TodoDetailComponent implements OnInit, OnDestroy {
  selectedCountSubscription: Subscription;
  selectedCategorySubscription: Subscription;
  todoAddedSubscription: Subscription;
  todoList: Array<Todo> = [];
  // Is used by the UI to apply filter for search using the pipes
  descriptionFilter: string;
  completedState: string;
  loading = false;
  // Is used by the UI to apply filter for category using the pipes
  categoryFilter: number;
  countFilter: string;

  constructor(
    private todoService: TodoService,
    private notificationService: NotificationService
  ) {}

  resetAllFilters() {
    this.countFilter = '';
    this.categoryFilter = 0; // clear filter
    this.descriptionFilter = ''; // clear filter
  }

  ngOnInit() {

    this.loading = true;

    /** Load todos form the database */
    this.todoService.loadTodos().subscribe(s => {
      this.todoList = s;
      this.notificationService.notifyTodoListChanged(this.todoList);
      this.loading = false;
    });

    /* Subscribing to todo added observable */
    this.todoAddedSubscription = this.notificationService.todoAddedObservable.subscribe(
      todo => {
        this.todoList.push(todo);
        /* inform subscribers e.g. todo count component to update their details */
        this.notificationService.notifyTodoListChanged(this.todoList);
      }
    );

    // User has changed the cateogy id of the category component, so filter todos
    this.selectedCategorySubscription = this.notificationService.selectedCategoryChangedObservable.subscribe(
      id => {
        this.resetAllFilters();
        this.notificationService.notifyResetFilters();
        this.categoryFilter = id;
      }
    );

    this.selectedCountSubscription = this.notificationService.selectedCountChangedObservable.subscribe(
      filter => {
        this.resetAllFilters();
        this.notificationService.notifyResetFilters();
        this.countFilter = filter;
      }
    );
  }

  ngOnDestroy(): void {
    this.selectedCountSubscription.unsubscribe();
    this.selectedCategorySubscription.unsubscribe();
    this.todoAddedSubscription.unsubscribe();
  }

  /** removes todo from the list and notifies the subscribers */
  removeTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.Key).subscribe(deleted => {
      if (deleted === true) {
        this.todoList.splice(this.todoList.indexOf(todo), 1);
        this.notificationService.notifyTodoListChanged(this.todoList);
        this.notificationService.notifyTodoDeleted(todo);
      }
    });
  }

  /** Changes completed or not and notifies the subscribers */
  todoChanged(todo: Todo) {
    this.todoList.forEach(element => {
      if (element.Id === todo.Id) {
        element.Completed = todo.Completed;

        this.todoService.updateTodo(todo).subscribe(s => {
          // broadcast the message through the shared service observable!
          this.notificationService.notifyTodoListChanged(this.todoList);
        });
      }
    });

    /** Applies custom animation based on checkbox toggling */
    if (todo.Completed) {
      this.completedState = 'completed';
      setTimeout(s => (this.completedState = 'notcompleted'), 1000);
    } else {
      this.completedState = 'notcompleted';
    }
  }

  /** To show the details or not */
  showDetails = (): boolean => {
    return this.todoList && this.todoList.length > 0;
  }

  /** Emitted from the child search component this will be used in the ngFor to filter todos */
  applyFilter = filter => {
    this.descriptionFilter = filter;
  }

  getFiltersPopups(): Array<string> {
    const array = new Array<string>();
    array.push('Category Filter: ' + this.categoryFilter);
    array.push('Count Filter: ' + this.countFilter);
    array.push('Description Filter: ' + this.descriptionFilter);
    return array;
  }
}
