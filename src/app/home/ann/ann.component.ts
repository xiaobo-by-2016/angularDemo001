import { AddAnnComponent } from './../add-ann/add-ann.component';
import { HttpService } from './../../utils/http.service';
import { CommonService } from './../../utils/common.service';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { getLocalStorage } from '../../utils/localStorage';

@Component({
  selector: 'app-ann',
  templateUrl: './ann.component.html',
  styleUrls: ['./ann.component.scss']
})
export class AnnComponent implements OnInit {

  public userInfo;
  public annList = [];


  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private httpService: HttpService
  ) {

  }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
    if (this.userInfo.roleId == 1) {
      this.getAnnListByTecAcc();
    } else {
      this.getAnnListByTopicId();
    }

  }
  openNewAnn() {
    let dialogRef = this.dialog.open(AddAnnComponent, {
      panelClass: 'add-progress-panel'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addNewAnn(result)
      }
    });
  }
  addNewAnn(annInfo) {
    this.commonService.showLoading('请稍后...')
    this.httpService.doPost(
      {
        roleId: this.userInfo.roleId,
        annTitle: annInfo.annTitle,
        annContent: annInfo.annContent,
        annTime: annInfo.annTime,
        userAccount: this.userInfo.userAccount
      }, 'addAnn').subscribe(res => {
        if (res.success) {
          if (this.userInfo.roleId == 1) {
            this.getAnnListByTecAcc();
          } else {
            this.getAnnListByTopicId();
          }
        } else {
          this.commonService.toastSuccess(res.message, 100000);
        }
      })
  }

  //学生
  getAnnListByTopicId() {
    this.commonService.showLoading('请稍后...')
    this.httpService.doPost(
      {
        topicId: this.userInfo.topicId
      }, 'getAnnListByTopicId').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.annList = res.annList;
          } else {
            this.commonService.toastSuccess(res.message, 100000)
          }
        }, 1000)
      })
  }

  //教师
  getAnnListByTecAcc() {
    this.commonService.showLoading('请稍后...')
    this.httpService.doPost(
      {
        userAccount: this.userInfo.userAccount
      }, 'getAnnListByTecAcc').subscribe(res => {
        setTimeout(() => {
          this.commonService.hideLoding();
          if (res.success) {
            this.annList = res.annList;
          } else {
            this.commonService.toastSuccess(res.message, 100000)
          }
        }, 1000)
      })
  }


  deleteAnnById(annId){
    this.commonService.showLoading('请稍后...')
    this.httpService.doPost(
      {
        annId: annId
      }, 'deleteAnnById').subscribe(res => {
        setTimeout(() => {
          if (res.success) {
            this.getAnnListByTecAcc();
          } else {
            this.commonService.toastSuccess(res.message, 100000)
          }
        }, 1000)
      })
  }





}
