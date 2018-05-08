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
  public currentPage: string;
  constructor(private router:Router) {}
  
  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    
    if(this.userInfo.roleId == 1){
      //教师
      this.router.navigate(['/home/topic-manage']);//默认界面
      this.currentPage = '题目管理';
    }else{
      //学生
      this.router.navigate(['/home/progress-manage']);//默认界面
      this.currentPage = '进度管理';
    }
    
    if(this.width >700 ){
      this.navMode = 'side';
    }else{
      this.navMode = 'push';
    }
    console.log(this.navMode)
  }
  showRightCom(urlObj){
    this.currentPage = urlObj.title;
    this.router.navigate([urlObj.url]);
  }
  toggle(sideObj){
    if(this.width <700 ){
      sideObj.toggle();
    }
  }
}
