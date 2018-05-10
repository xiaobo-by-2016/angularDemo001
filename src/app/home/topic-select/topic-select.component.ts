import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/common.service';
import { HttpService } from '../../utils/http.service';
import { getLocalStorage } from '../../utils/localStorage';

@Component({
  selector: 'app-topic-select',
  templateUrl: './topic-select.component.html',
  styleUrls: ['./topic-select.component.scss']
})
export class TopicSelectComponent implements OnInit {
  public userInfo;
  public topicList =[];
  public keyStr:string ='';
  public isChecked:boolean =false;
  constructor(
    private commonService: CommonService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    this.getTopList()
  }

  getTopList(){
    this.commonService.showLoading('正在获取...');
    this.httpService.doPost(
      {
        studentAccount:this.userInfo.userAccount,
        collegeId: this.userInfo.collegeId,
      }, 'getTopicsByCollegeId').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.topicList = res.topicList;
           
            this.isChecked =res.isChecked;
          } else {
            this.commonService.toastSuccess(res.message)
          }
        }, 500);
        
      })
  }

  searchByKey(){
    this.commonService.showLoading('正在查询...');
    this.httpService.doPost(
      {
        studentAccount:this.userInfo.userAccount,
        collegeId: this.userInfo.collegeId,
        strkey:this.keyStr
      }, 'getTopicsByStuKey').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.topicList = res.topicList;
            this.isChecked =res.isChecked;
          } else {
            this.commonService.toastSuccess(res.message,2000000)
          }
        }, 500);
        
      })
  }

  getCheckedTopic(){
    this.commonService.showLoading('正在获取...');
    this.httpService.doPost(
      {
        studentAccount:this.userInfo.userAccount,
      }, 'getCheckedTopic').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.topicList = res.topicList;
            this.isChecked =res.isChecked;
          } else {
            this.commonService.toastSuccess(res.message,2000000)
          }
        }, 500);
        
      })
  }

  selectTopic(topicId){
    this.commonService.showLoading('正在获取...');
    this.httpService.doPost(
      {
        studentAccount:this.userInfo.userAccount,
        topicId:topicId,
        collegeId:this.userInfo.collegeId
      }, 'selectTopic').subscribe(res => {
        console.log(res)
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.topicList = res.topicList;
            this.isChecked =res.isChecked;
          } else {
            this.commonService.toastSuccess(res.message,2000)
          }
        }, 500);
        
      })
  }

}
