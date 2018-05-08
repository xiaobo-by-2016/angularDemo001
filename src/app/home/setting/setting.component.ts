import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../utils/http.service';
import { equalValidator, requiredSelf, lengthValidator } from '../../utils/validators';
import { CommonService } from '../../utils/common.service';
import { getLocalStorage } from '../../utils/localStorage';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  settingModel: FormGroup;
  private userInfo: any;
  constructor(
    private router: Router,
    private httpService: HttpService,
    fb: FormBuilder,
    private commonService: CommonService
  ) {
    this.settingModel = fb.group({
      oldPassword: ['', lengthValidator('密码最小长度6,最大长度12', 6, 12)],
      passwordsGroup: fb.group({
        newPassword1: ['', [lengthValidator('密码最小长度6,最大长度12', 6, 12)]],
        newPassword2: ['']
      }, { validator: equalValidator('密码与确认密码', 'newPassword1', 'newPassword2') })
    })
  }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo')
  }
  onSubmit() {

    if (this.settingModel.valid) {
      this.commonService.showLoading('修改中...');
      this.httpService.doPost(
        {
          userPhone: this.userInfo.userPhone,
          newPassword1: this.settingModel.value.passwordsGroup.newPassword1,
          newPassword2: this.settingModel.value.passwordsGroup.newPassword2,
          oldPassword: this.settingModel.value.oldPassword,
        }, 'updatePassword').subscribe(res => {
          this.commonService.hideLoding();
          if (res.success) {
            this.commonService.toastSuccess('密码修改成功~')
          } else {
            this.commonService.toastSuccess(res.message)
          }
        })
    } else {
      this.commonService.toastWarn('信息填写有误~', 2000)
    }
  }

}
