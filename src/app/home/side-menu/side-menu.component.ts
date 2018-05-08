import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Output() selectMenuItem = new EventEmitter<string>();
  @Input() menuItems ;
  @Input() userRole;
  constructor() { }
      
  ngOnInit() {
    
  }
  doSelectMenu(p:any ){
    this.selectMenuItem.emit(p);
  }

}
