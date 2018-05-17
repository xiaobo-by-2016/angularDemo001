import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { getLocalStorage, clearLocalStorage } from '../../utils/localStorage';
import { Router ,NavigationStart} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideMenuToggle = new EventEmitter<void>();
  private width: number = window.screen.availWidth;
  public isDisabled: boolean = true;
  public userInfo;
  
  public screenWidthShow ;
  constructor(private router: Router) {
    if (window.screen.availWidth > 700) {
      this.screenWidthShow = true;
    } else {
      this.screenWidthShow  = false;
    }
  }

  @Input() currentPage: string;
  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) { // 当导航成功结束时执行
          if (event.url == '/home/account-info1') {
            this.userInfo = getLocalStorage('userInfo');
            this.router.navigate(['/home/account-info'])
          }
        }
      });
    if (this.width > 700) {
      this.isDisabled = true;
      this.sideMenuToggle.emit();
    } else {
      this.isDisabled = false;
    }
  }
  openSidenMenu() {
    this.sideMenuToggle.emit();
  }
  doLogout(){
    this.router.navigate(['/login']);
    clearLocalStorage();
  }

}
