import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../utils/http.service';
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
    fb: FormBuilder) {

    this.registerFormModel = fb.group({
      userPhone: ['']
    })

  }

  ngOnInit() {
  }
  getValidateCdoe() {
    if (this.valideteCodeInfo.status) {
      this.timeHandler(60);
    }
    this.isGetCode = true;
    this.httpService.doPost(
      {
        userPhone: this.registerFormModel.get('userPhone').value,
        smsActnStat:1
      }, 'sendSmsCode').subscribe(res => {
        if (res.success) {
          console.log(res);
        } else {
          console.log(res.message);
        }
      })
  }
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
}
