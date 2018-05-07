import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../utils/http.service';
import { 
  mobileValidator, 
  requiredSelf, 
  lengthValidator, 
  equalValidator } from '../../utils/validators';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  fpFormModel: FormGroup;
  public valideteCodeInfo: any = {
    status: true,  //true可以点击获取验证码
    info: '获取验证码'
  }
  public isGetCode: boolean = false;


  constructor(
    private router: Router,
    private httpService: HttpService,
    fb: FormBuilder) {

    this.fpFormModel = fb.group({
      passwordsGroup: fb.group({
        password1: ['', [lengthValidator('密码最小长度6,最大长度12', 6, 12)]],
        password2: [''],
      }, { validator: equalValidator('密码与确认密码', 'password1', 'password2') }),
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
    
    if (this.fpFormModel.get('userPhone').valid) {
      if (this.valideteCodeInfo.status) {
        this.timeHandler(60);
      }
      this.isGetCode = true;
      this.httpService.doPost(
        {
          userPhone: this.fpFormModel.get('userPhone').value,
          smsActnStat: 2
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
    if (this.fpFormModel.valid) {
      this.httpService.doPost(
        {
          password1: this.fpFormModel.value.passwordsGroup.password1,
          password2: this.fpFormModel.value.passwordsGroup.password2,
          userPhone: this.fpFormModel.value.userPhone,
          code: this.fpFormModel.value.code
        }, 'findPassword').subscribe(res => {
          if (res.success) {
              console.log(res);
              this.router.navigate(['/login']);
          } else {
            console.log(res.message);
          }
        })
    } else {
      console.log(this.fpFormModel.value)
    }
  }
}
