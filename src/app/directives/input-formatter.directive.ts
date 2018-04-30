import { Directive, HostListener, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[input-formatter]'
})
export class InputFormatterDirective {

  // Injectiong the reference of the elment that is hosting the directive
  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  // input property value from the directive. input-formatter makes it as input from the directive itself
  // tslint:disable-next-line:no-input-rename
  @Input('input-formatter') format: string;

  // Host listener that enables to listen to events
  @HostListener('focus') onFocus() {
    console.log('on focus');
  }

  @HostListener('blur') onBlur() {
    const value: string = this.el.nativeElement.value;
    if (this.format === 'upper') {
      this.el.nativeElement.value = value.toUpperCase();
    }
    if (this.format === 'lower') {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }

}
