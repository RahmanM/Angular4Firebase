import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  searchCriteria: string;

  @Output()
  searchChangedEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  placeholder: string;

  constructor() { }

  ngOnInit() {
  }

  clear(input) {
    this.searchCriteria = '';
    this.searchChangedEvent.emit(this.searchCriteria);
  }

  search() {
     this.searchChangedEvent.emit(this.searchCriteria);
  }

  getPlaceholder() {
    return this.placeholder ? this.placeholder : 'Search...';
  }

}
