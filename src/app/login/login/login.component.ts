import { CommonService } from './../../utils/common.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../utils/http.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { setLocalStorage } from '../../utils/localStorage';
import { timeout } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormModel: FormGroup;

  constructor(
    private router: Router,
    private httpService: HttpService,
    fb: FormBuilder,
    private commonService:CommonService) {

    this.loginFormModel = fb.group({
      userAccount: [''],
      userPassword: ['']
    })
  }
  ngOnInit() {}
  onSubmit() {
    this.commonService.showLoading()
    this.httpService.doPost(this.loginFormModel.value,'login').subscribe(res => {
        if(res.success){
          setLocalStorage('userInfo',res.userInfo[0])
          setTimeout(() =>{
            this.commonService.hideLoding()
            this.router.navigate(['/home']);
          },1000)
        }else{
          console.log(res.message);
        }
    })
  }
}
