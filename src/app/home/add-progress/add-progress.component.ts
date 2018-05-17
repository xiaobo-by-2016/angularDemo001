import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { requiredSelf, rangeNumberValidator } from '../../utils/validators';
import { CommonService } from '../../utils/common.service';
@Component({
  selector: 'app-add-progress',
  templateUrl: './add-progress.component.html',
  styleUrls: ['./add-progress.component.scss']
})
export class AddProgressComponent implements OnInit {
  addProgressModel:FormGroup;
  private proTime:Date;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.proTime = new Date();
    this.addProgressModel = this.fb.group({
      progressTime: [`${this.proTime.getFullYear()}/${this.proTime.getMonth()+1}/${this.proTime.getDate()}  ${this.proTime.getHours()}:${this.proTime.getMinutes()}:${this.proTime.getSeconds()}`,[requiredSelf('时间不合法~')]],
      progress: ['',[rangeNumberValidator('数值范围1-100',1,100)]],
      progressContent: ['',[requiredSelf('进度详情不能为空~')]]
      
    })
  }

  onSubmit(){
    if(this.addProgressModel.valid){
      let result = this.addProgressModel.value;
      result.progressTime = this.proTime.getTime();
      this.dialogRef.close(result);
    }else{
      this.commonService.toastWarn('录入信息不完整~');
    }
  }
  cancel(){
    this.dialogRef.close(null);
  }

}
