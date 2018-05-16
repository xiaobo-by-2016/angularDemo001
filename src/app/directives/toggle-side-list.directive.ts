import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggleSideList]'
})
export class ToggleSideListDirective {

  constructor(
    private el: ElementRef
  ) {

  }
  @HostListener('click') click() {

    for (let index in this.el.nativeElement.children) {
      if (index <= this.el.nativeElement.children.length) {
        this.el.nativeElement.children[index].style.backgroundColor = '';
        this.el.nativeElement.children[index].style.color = '';
        
      }

    }
  }

}
