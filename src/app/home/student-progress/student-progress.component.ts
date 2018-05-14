import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../utils/common.service';
import { HttpService } from '../../utils/http.service';
import { getLocalStorage } from '../../utils/localStorage';

@Component({
  selector: 'app-student-progress',
  templateUrl: './student-progress.component.html',
  styleUrls: ['./student-progress.component.scss']
})
export class StudentProgressComponent implements OnInit {
  public userInfo;
  public topicList =[];
  public allList = [];
  public keyStr:string ='';
  constructor(
    private commonService:CommonService,
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    this.getTopicList();
  }
   /** 教师获取本人设置的毕设题目*/
   getTopicList() {
    this.commonService.showLoading('正在提交...');
    this.httpService.doPost(
      {
        teacherAccount: this.userInfo.userAccount,

      }, 'getTPByTecAcc').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
        if (res.success) {
          this.topicList = res.topicList;
          this.allList =res.topicList;
          console.log(this.topicList)
        } else {
          console.log(res.message)
          this.commonService.toastSuccess(res.message)
        }
        }, 1000);
      })
  }


  searchByKey(){
    this.commonService.showLoading('正在获取...')
    setTimeout(() => {
      if(this.keyStr){
        this.topicList =[];
        for(var index in this.allList){
          if(this.allList[index].studentName ){
            if(this.allList[index].topicTitle.indexOf(this.keyStr) !=-1|| this.allList[index].studentName.indexOf(this.keyStr)!=-1){
              console.log(this.allList[index])
              this.topicList.push(this.allList[index])
            }
          }else{
            if(this.allList[index].topicTitle.indexOf(this.keyStr) !=-1){
              console.log(this.allList[index])
              this.topicList.push(this.allList[index])
            }
          }
         
        }
        this.commonService.hideLoding()
      }else{
        this.topicList =this.allList;
        this.commonService.hideLoding()
      }
    }, 1000);
    
  }
}
