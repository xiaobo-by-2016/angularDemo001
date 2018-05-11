import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonService } from '../../utils/common.service';
import { HttpService } from '../../utils/http.service';
import { getLocalStorage } from '../../utils/localStorage';
import { AddProgressComponent } from '../add-progress/add-progress.component';
@Component({
  selector: 'app-progress-manage',
  templateUrl: './progress-manage.component.html',
  styleUrls: ['./progress-manage.component.scss']
})
export class ProgressManageComponent implements OnInit {
  public userInfo;
  public proList = [];
  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    this.getProList();
  }

  openAddProgress() {
    let dialogRef = this.dialog.open(AddProgressComponent, {
      panelClass: 'add-progress-panel'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addProgress(result)
      }
    });
  }
  addProgress(progressInfo) {
    this.commonService.showLoading('正在提交...');
    this.httpService.doPost(
      {
        progress: progressInfo.progress,
        progressContent: progressInfo.progressContent,
        progressTime: progressInfo.progressTime,
        userAccount: this.userInfo.userAccount,
        progressTopicId: this.userInfo.topicId
      }, 'addProgress').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.commonService.toastSuccess('新增成功~');
            this.proList = res.proList;
          } else {
            this.commonService.toastSuccess(res.message,100000)
          }
        }, 1000)
      })
  }


  getProList() {
    this.commonService.showLoading('正在获取...');
    this.httpService.doPost(
      {
        userAccount: this.userInfo.userAccount,

      }, 'getProList').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.proList = res.proList;
            console.log(this.proList)
          } else {
            this.commonService.toastSuccess(res.message, 2000)
          }
        }, 1000)
      })
  }


  deletePro(proId){
    this.commonService.showLoading('正在执行删除...');
    this.httpService.doPost(
      {
        userAccount: this.userInfo.userAccount,
        proId:proId
      }, 'deletePro').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.proList = res.proList;
          } else {
            this.commonService.toastSuccess(res.message, 2000)
          }
        }, 1000)
      })
  }
}
