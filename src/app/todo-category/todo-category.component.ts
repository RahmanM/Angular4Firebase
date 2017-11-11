import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from '../services/TodoService';
import { Category } from '../modals/Todo';
import { NotificationService } from '../services/NotificationService';
import { Subscription } from "rxjs/Subscription";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-category',
  templateUrl: './todo-category.component.html',
  styleUrls: ['./todo-category.component.css']
})
export class TodoCategoryComponent implements OnInit, OnDestroy {
  resetfilterSubscription     : Subscription;
  todoDeletedSubscription     : Subscription;
  categoryLoadedSubscription  : Subscription;
  todoAddedSubscription       : Subscription;


  categories: Array<Category>;
  selectedIndex: number;

  constructor(private todoService: TodoService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.categoryLoadedSubscription = this.todoService.loadCategories().subscribe(
      c => {
        this.categories = c;
      }
    );

    this.todoAddedSubscription = this.notificationService.todoAddedObservable.subscribe(
      todo => {
        this.categories.forEach(element => {
          if (element.Id === todo.CategoryId) {
            element.Count++;
          }
        });
      });

    this.todoDeletedSubscription = this.notificationService.todoDeletedObservable.subscribe(todo => {
      this.categories.forEach(element => {
        if (element.Id === todo.CategoryId) {
          element.Count--;
        }
      });
    });

    this.resetfilterSubscription = this.notificationService.resetFiltersObservable.subscribe(() => {
      this.selectedIndex = -1;
    });
  }

  categorySelected(id: number, rowIndex) {
    this.notificationService.notifyselectedCategoryChanged(id);
    this.selectedIndex = rowIndex;
  }

  categoryReset() {
    this.notificationService.notifyselectedCategoryChanged(0);
    this.selectedIndex = -1;
  }

  ngOnDestroy(): void {
    this.todoAddedSubscription.unsubscribe();
    this.resetfilterSubscription.unsubscribe();   
    this.todoDeletedSubscription.unsubscribe();   
    this.categoryLoadedSubscription.unsubscribe(); 
  }

}
