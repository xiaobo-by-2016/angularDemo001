import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../utils/http.service';
import { equalValidator, requiredSelf, lengthValidator, emailValidator } from '../../utils/validators';
import { CommonService } from '../../utils/common.service';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
  accountInfoModel: FormGroup;
  private userInfo;//用户信息
  public schoolList;//高校列表


  constructor(
    private router: Router,
    private httpService: HttpService,
    private fb: FormBuilder,
    private commonService: CommonService
  ) {


  }

  ngOnInit() {
    this.showUserInfo();
    this.getSchoolList(this.userInfo.userPhone, this.userInfo.userAccount);
  }

  /**
   * 获取高校列表
   * @param userPhone 用户手机号 缓存中获取
   * @param userAccount 用户账号 缓存中获取
   */
  getSchoolList(userPhone, userAccount) {
    this.commonService.showLoading('获取用户信息...')
    this.httpService.doPost(
      {
        userPhone: userPhone,
        userAccount: userAccount
      }, 'getSchoolList').subscribe(res => {
        this.commonService.hideLoding();
        if (res.success) {
          this.schoolList = res.schoolList;
        } else {
          this.commonService.toastError(res.message);
        }
      })
  }

  /** 
   * 界面信息返现
  */
  showUserInfo() {
    this.userInfo = getLocalStorage('userInfo');
    this.accountInfoModel = this.fb.group({
      userName: [this.userInfo.userName || '', [requiredSelf('用户姓名不能为空~')]],
      email: [this.userInfo.email || '', [emailValidator()]],
      collegeId: [this.userInfo.collegeId || '', [requiredSelf('高校信息不能为空~')]],
      userAccount: [this.userInfo.userAccount],
      userPhone: [this.userInfo.userPhone],
      sex: [this.userInfo.sex+'' || '1']
    })
  }

  onSubmit() {
    if (this.accountInfoModel.valid) {

      this.commonService.showLoading('正在更新用户信息...');
      this.httpService.doPost(
        this.accountInfoModel.value, 'updateUserInfo').subscribe(res => {
          this.commonService.hideLoding();
          if (res.success) {
            this.commonService.toastSuccess('信息更新成功~');
            setLocalStorage('userInfo',res.userInfo[0])
            this.router.navigate(['/home/account-info1']);
          } else {
            this.commonService.toastSuccess(res.message)
          }
        })
    } else {
      this.commonService.toastWarn('信息有误,请修正后再进行提交~');
    }
  }

}
