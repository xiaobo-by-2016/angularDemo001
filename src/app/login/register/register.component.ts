import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../utils/http.service';
import { 
  mobileValidator, 
  requiredSelf, 
  lengthValidator, 
  equalValidator } from '../../utils/validators';
import { CommonService } from '../../utils/common.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormModel: FormGroup;

  public valideteCodeInfo: any = {
    status: true,  //true可以点击获取验证码
    info: '获取验证码'
  }
  public isGetCode: boolean = false;


  constructor(
    private router: Router,
    private httpService: HttpService,
    private commonService: CommonService,
    fb: FormBuilder) {

    this.registerFormModel = fb.group({
      userAccount: ['', [lengthValidator('账号最小长度12,最大长度20', 12, 20)]],
      passwordsGroup: fb.group({
        userPassword: ['', [lengthValidator('密码最小长度6,最大长度12', 6, 12)]],
        upConfirm: [''],
      }, { validator: equalValidator('密码与确认密码', 'userPassword', 'upConfirm') }),
      userRoleId: ['2'],
      userPhone: ['', [requiredSelf('手机号不能为空'), mobileValidator()]],
      code: ['', [requiredSelf('验证码不能为空')]]
    })

  }

  ngOnInit() {
  }

  /**
   * 验证码获取
   */
  getValidateCdoe() {
    
    if (this.registerFormModel.get('userPhone').valid) {
      if (this.valideteCodeInfo.status) {
        this.timeHandler(60);
      }
      this.isGetCode = true;
      this.httpService.doPost(
        {
          userPhone: this.registerFormModel.get('userPhone').value,
          smsActnStat: 1
        }, 'sendSmsCode').subscribe(res => {
          if (res.success) {
            console.log(res);
          } else {
            console.log(res.message);
          }
        })
    }else{
      alert('手机号不能为空')
    }

  }

  /**
   * 倒计时
   * @param count 
   */
  timeHandler(count: number) {
    if (this.valideteCodeInfo.status) {
      this.valideteCodeInfo.status = !this.valideteCodeInfo.status;
      this.valideteCodeInfo.info = `${count} s`;
      let timer = setInterval(() => {
        if (count > 1) {
          count--;
          this.valideteCodeInfo.info = `${count} s`;
        } else {
          this.valideteCodeInfo.status = !this.valideteCodeInfo.status;
          this.valideteCodeInfo.info = '获取验证码';
          this.isGetCode = false;
          clearInterval(timer);
        }
      }, 1000)
    }
  }

  /**
   * 注册
   */
  onSubmit() {
    if (this.registerFormModel.valid) {
      this.httpService.doPost(
        {
          userAccount: this.registerFormModel.value.userAccount,
          userPassword: this.registerFormModel.value.passwordsGroup.userPassword,
          userRoleId: this.registerFormModel.value.userRoleId,
          userPhone: this.registerFormModel.value.userPhone,
          code: this.registerFormModel.value.code
        }, 'register').subscribe(res => {
          if (res.success) {
              console.log(res);
              this.router.navigate(['/login']);
          } else {
           this.commonService.toastError(res.message);
          }
        })
    } else {
      this.commonService.toastError('注册信息有误~');
    }
  }
}
