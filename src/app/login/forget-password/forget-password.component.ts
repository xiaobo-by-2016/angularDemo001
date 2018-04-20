import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  public valideteCodeInfo :any={
    status:true,  //true可以点击获取验证码
    info:'获取验证码'
  }
  constructor() { }

  ngOnInit() {
  }
  getValidateCdoe(){
    if(this.valideteCodeInfo.status){
      this.timeHandler(5);
    }
  }
  timeHandler(count:number){
    
    if(this.valideteCodeInfo.status){
        this.valideteCodeInfo.status = !this.valideteCodeInfo.status ;
        this.valideteCodeInfo.info = `${count} s`;
        let timer =  setInterval(() => {
          if(count>1){
            count--;
            this.valideteCodeInfo.info = `${count} s`;
          }else{
            this.valideteCodeInfo.status = !this.valideteCodeInfo.status ;
            this.valideteCodeInfo.info = '获取验证码';
            clearInterval(timer);
          }
        },1000)
    }
    
  }
}
