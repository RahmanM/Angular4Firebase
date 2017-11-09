import { Component, OnInit } from '@angular/core';
import { Todo } from '../modals/Todo';
import { TodoService } from '../services/TodoService';
import { NotificationService } from '../services/NotificationService';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-counts',
  templateUrl: './todo-counts.component.html',
  styleUrls: ['./todo-counts.component.css']
})
export class TodoCountsComponent implements OnInit {

  selectedBadge: string;
  todoList: Array<Todo> = [];
  totalTodos= 0;
  totalCompleted= 0;
  totalNotCompleted= 0;

   constructor(private todoService: TodoService, private notificationService: NotificationService) {

      notificationService.todoListChangedObservable.subscribe(list => {
        this.todoList = list;
        this.totalTodos =  this.todoList.length;
        this.totalCompleted = this.todoList.filter(t => t.Completed === true).length;
        this.totalNotCompleted = this.totalTodos - this.totalCompleted;
      });

      this.notificationService.resetFiltersObservable.subscribe(() => this.countReset());

   }

  ngOnInit() {
  }

  showByCount(toShow: string) {
     this.notificationService.notifyselectedCountChanged(toShow);
     this.selectedBadge = toShow;
  }

  countReset(): void {
    this.selectedBadge = '';
  }
}
