import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { getLocalStorage, clearLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { CommonService } from '../../utils/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private width: number = window.screen.availWidth;
  public navMode: string = 'side';
  public userInfo;
  public currentPage: string;
  constructor(private router: Router,
    private comonService: CommonService) { }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) { // 当导航成功结束时执行
          if (event.url == '/home/account-info1') {
            this.userInfo = getLocalStorage('userInfo');
            this.router.navigate(['/home/account-info'])
          }
          if(getLocalStorage('loginStatus') !== 'login'){
            if(event.url == '/home'){
              this.router.navigate(['/login']);
              clearLocalStorage();
            }
          }
          
        }
      });


    if (this.userInfo.userName && this.userInfo.collegeId && this.userInfo.email) {
      setLocalStorage('loginStatus','noLogin');
      if (this.userInfo.roleId == 1) {
        //教师
        this.router.navigate(['/home/student-progress']);//默认界面
        this.currentPage = '学生进度';
      } else {
        //学生
        this.router.navigate(['/home/progress-manage']);//默认界面
        this.currentPage = '进度管理';
      }
    } else {
      // this.comonService.toastWarn('进行该操作前,请先进行个人信息完善~');
      this.router.navigate(['/home/account-info']);
      this.currentPage = '个人信息';
    }



    if (this.width > 700) {
      this.navMode = 'side';
    } else {
      this.navMode = 'push';
    }
  
  }
  showRightCom(urlObj) {
    if (this.userInfo.userName && this.userInfo.collegeId && this.userInfo.email) {
      this.currentPage = urlObj.title;
      this.router.navigate([urlObj.url]);
    } else {
      this.comonService.toastWarn('进行该操作前,请先进行个人信息完善~')
      this.router.navigate(['/home/account-info']);
      this.currentPage = '个人信息';
    }


  }
  toggle(sideObj) {
    if (this.width < 700) {
      sideObj.toggle();
    }
  }
}
