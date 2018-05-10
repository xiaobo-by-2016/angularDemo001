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
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.addProgressModel = this.fb.group({
      progressTime: ['',[requiredSelf('时间不合法~')]],
      progress: ['',[rangeNumberValidator('数值范围1-100',1,100)]],
      progressContent: ['',[requiredSelf('进度详情不能为空~')]]
      
    })
  }

  onSubmit(){
      
  }

}
