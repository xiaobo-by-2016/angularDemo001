import { CommonService } from './../../utils/common.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { requiredSelf } from '../../utils/validators';

@Component({
  selector: 'app-add-ann',
  templateUrl: './add-ann.component.html',
  styleUrls: ['./add-ann.component.scss']
})
export class AddAnnComponent implements OnInit {

  addAnnModel:FormGroup;
  private proTime:Date;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddAnnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.proTime = new Date();
    this.addAnnModel = this.fb.group({
      annTime: [`${this.proTime.getFullYear()}/${this.proTime.getMonth()+1}/${this.proTime.getDate()}  ${this.proTime.getHours()}:${this.proTime.getMinutes()}:${this.proTime.getSeconds()}`,[requiredSelf('时间不合法~')]],
      annTitle: ['',[requiredSelf('不能为空')]],
      annContent: ['',[requiredSelf('不能为空')]]
      
    })
  }
  cancel(){
    this.dialogRef.close(null);
  }
  onSubmit(){
    if(this.addAnnModel.valid){
      let result = this.addAnnModel.value;
      this.dialogRef.close(result);
    }else{
      this.commonService.toastWarn('公告信息不完整~');
    }
  }
}
