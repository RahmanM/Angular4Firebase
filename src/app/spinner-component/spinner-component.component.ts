import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  @Input()
  textToAnimate:  string;

  getTextToAnimateOrDefault = () => {
    return this.textToAnimate ? this.textToAnimate : 'Processing...';
  }

}
