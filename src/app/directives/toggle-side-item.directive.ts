import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToggleSideItem]'
})
export class ToggleSideItemDirective {

  constructor(
    private el:ElementRef
  ) { 
    
  }
  
  @HostListener('click') click() {
    setTimeout(() => {
      this.el.nativeElement.style.backgroundColor = 'lightgray';
      this.el.nativeElement.style.color= 'white';
    }, 500);
 }
}
