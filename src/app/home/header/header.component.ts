import { Component, OnInit, Output ,EventEmitter,Input} from '@angular/core';
import { getLocalStorage } from '../../utils/localStorage';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideMenuToggle = new EventEmitter<void>();
  private width :number = window.screen.availWidth;
  public isDisabled: boolean = true;
  public userInfo;
  constructor() { 
    
  }

  @Input() currentPage: string ;
  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
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
