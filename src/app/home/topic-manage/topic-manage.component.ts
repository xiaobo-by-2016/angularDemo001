import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTopicComponent } from '../add-topic/add-topic.component';
import { getLocalStorage } from '../../utils/localStorage';
@Component({
  selector: 'app-topic-manage',
  templateUrl: './topic-manage.component.html',
  styleUrls: ['./topic-manage.component.scss']
})
export class TopicManageComponent implements OnInit {

  public userInfo;
  private topicTitle: string = '';
  private topicContent: string = '';
  public topicList;
  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    this.getTopicList();
  }
  openAddTopic() {
    let dialogRef = this.dialog.open(AddTopicComponent, {
      panelClass: 'add-topic-panel',
      data: {
        topicTitle: this.topicTitle,
        topicContent: this.topicContent
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addTopic(result)
      }
    });
  }
  addTopic(topicInfo: any) {
    this.commonService.showLoading('正在提交...');
    this.httpService.doPost(
      {
        topicTitle: topicInfo.topicTitle,
        topicContent: topicInfo.topicContent,
        teacherAccount: this.userInfo.userAccount,
        collegeId: this.userInfo.collegeId
      }, 'addTopic').subscribe(res => {
        this.commonService.hideLoding();
        if (res.success) {
          this.commonService.toastSuccess('新增成功~');
          this.topicList = res.topicList;
        } else {
          this.commonService.toastSuccess(res.message)
        }
      })
  }

  /** 教师获取本人设置的毕设题目*/
  getTopicList() {
    this.commonService.showLoading('正在提交...');
    this.httpService.doPost(
      {
        teacherAccount: this.userInfo.userAccount,

      }, 'getTopicsByTecAcc').subscribe(res => {
        this.commonService.hideLoding();
        if (res.success) {
          this.topicList = res.topicList;
          console.log(this.topicList)
        } else {
          console.log(res.message)
          this.commonService.toastSuccess(res.message)
        }
      })
  }


}

