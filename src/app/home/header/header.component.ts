import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideMenuToggle = new EventEmitter<void>();
  private width :number = window.screen.availWidth;
  private isDisabled: boolean = true;
  constructor() { 
    
  }

  ngOnInit() {
    if(this.width > 700 ){
      this.isDisabled = true;
      this.sideMenuToggle.emit();
    }else{
      this.isDisabled =false;
    }
  }
  openSidenMenu(){
    this.sideMenuToggle.emit();
  }

}
