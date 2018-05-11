import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { requiredSelf } from '../../utils/validators';
import { CommonService } from '../../utils/common.service';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.scss']
})
export class AddTopicComponent implements OnInit {
  addTopicModel: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddTopicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService
  ) {
      
  }

  ngOnInit() {
    this.addTopicModel = this.fb.group({
      topicTitle: [this.data.topicTitle,[requiredSelf('毕设题目不能为空~')]],
      topicContent: [this.data.topicContent,[requiredSelf('毕设内容不能为空~')]]
    })
  }

  onSubmit(){
    if(this.addTopicModel.valid){
      this.dialogRef.close(this.addTopicModel.value);
    }else{
      this.commonService.toastWarn('录入信息不完整~');
    }
  }
  cancel(){
    this.dialogRef.close(null);
  }
}
