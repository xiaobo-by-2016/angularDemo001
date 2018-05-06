import {
    Validators,
    AbstractControl,
    FormControl,
    FormGroup,
    ValidatorFn
} from '@angular/forms';

export function mobileValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        let valid = myreg.test(control.value);
        return valid ? null : { mobile: {errInfo:'手机号不合法~'} };
    };
}
export function required(info: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        let valid = control.value.trim()===''?false:true;
        return valid ? null : { mobile: {errInfo:info+'为必填项'} };
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
