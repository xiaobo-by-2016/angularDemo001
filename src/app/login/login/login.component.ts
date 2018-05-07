
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../utils/http.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { setLocalStorage } from '../../utils/localStorage';

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
    fb: FormBuilder) {

    this.loginFormModel = fb.group({
      userAccount: [''],
      userPassword: ['']
    })

  }
  ngOnInit() {}
  onSubmit() {
    console.log(this.loginFormModel.value)
    this.httpService.doPost(this.loginFormModel.value,'login').subscribe(res => {
        if(res.success){
          setLocalStorage('userInfo',res.userInfo[0])
          this.router.navigate(['/home'])
        }else{
          console.log(res.message);
        }
    })
  }
}
