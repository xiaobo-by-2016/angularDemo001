import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getLocalStorage } from '../../utils/localStorage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private width :number = window.screen.availWidth;
  public navMode :string = 'side';
  public userInfo;
  constructor(private router:Router) {}
  
  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');

    this.router.navigate(['/home/topic-manage']);//默认界面
    if(this.width >700 ){
      this.navMode = 'side';
    }else{
      this.navMode = 'push';
    }
    console.log(this.navMode)
  }
  showRightCom(p){
    console.log(p)
    this.router.navigate([p]);
  }
  toggle(sideObj){
    if(this.width <700 ){
      sideObj.toggle();
    }
  }
}
