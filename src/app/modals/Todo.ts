export class Todo {

  constructor(private descr: string, private done: boolean, private show: boolean, categoryId: number) {
    this.Description = descr;
    this.Completed = done;
    this.Show = show;
    this.CategoryId = categoryId;
  }

  Description: string;
  Completed: boolean;
  Show: boolean;  Key: string;
  Id: string;
  CategoryId = 1;
  CreatedDate = Date.now();
}

export class Category {
  Id: number;
  Description: string;
  Count= 0;
  Key: string;
}
