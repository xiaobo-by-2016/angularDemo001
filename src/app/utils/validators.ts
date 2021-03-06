import {
    Validators,
    AbstractControl,
    FormControl,
    FormGroup,
    ValidatorFn
} from '@angular/forms';


//必输验证
export function requiredSelf(info: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let value = control.value+'';

        let valid = value.trim() === '' ? false : true;
        return valid ? null : { required: { errInfo: info} };
    };
}
//手机合法性验证
export function mobileValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        let valid = myreg.test(control.value);
        return valid ? null : { mobile: { errInfo: '手机号不合法~' } };
    };
}
//邮箱格式验证
export function emailValidator(): ValidatorFn {
    return (control:  AbstractControl): {[key:string]: any} => {
        var myreg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        let valid = myreg.test(control.value);
        return valid ? null : {email: { errInfo: '邮箱格式不正确~'}}
    }
}


//字段长度验证
export function lengthValidator(info: string, min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let valid;
        if (control.value.length >= min && control.value.length <= max) {
            valid = true;
        } else {
            valid = false;
        }
        return valid ? null : {  length: { errInfo: info} };
    };
}
//范围取值
export function rangeNumberValidator(info: string, min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let valid;
        if(control.value == ''){
            valid=false;
        }else{
            if (control.value >= min && control.value <= max) {
                valid = true;
            } else {
                valid = false;
            }
        }
        

        return valid ? null : {  rangeNumber: { errInfo: info} };
    };
}


//两个字段相等验证
export function equalValidator(info: string, name1: string, name2: string, ): ValidatorFn {
    return (group: FormGroup): any => {
        let valid: boolean;
        let str1: FormControl = group.get(name1) as FormControl;
        let str2: FormControl = group.get(name2) as FormControl;
        valid = (str1.value === str2.value);
        return valid ? null : { equal: { errInfo: info + '不同' } };
    };
}


/*
export function  equalValidator(group: FormGroup) :any {
    let password: FormControl = group.get('password') as FormControl;
    let pConfirm: FormControl = group.get('pConfirm') as FormControl;
    let valid:boolean = (password.value === pConfirm.value);
    console.log('密码检验结果'+valid);
    return valid ? null:{equal:true}
  }
*/
