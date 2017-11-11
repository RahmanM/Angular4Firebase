import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Category } from "../modals/Todo";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Subject } from "rxjs/Subject";

@Injectable()
export class CategoryService {
  
  categoryList: AngularFireList<Category>;

  constructor(private db: AngularFireDatabase) { }

  loadCategories = (): Observable<Array<Category>> => {
    
    var subject = new Subject<Category[]>(); 
    this.categoryList = this.db.list<Category>("/categories");
    var list = this.categoryList.snapshotChanges();

    list.subscribe(s => {
      var categories = new Array<Category>();

      s.forEach(item => {
        var cat = item.payload.toJSON() as Category;
        cat.Key = item.key;
        categories.push(cat)
        subject.next(categories);
      })
    })

    let result = subject.asObservable();
    return result;
  }

}
