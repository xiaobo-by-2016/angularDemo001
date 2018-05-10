import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonService } from '../../utils/common.service';
import { HttpService } from '../../utils/http.service';
import { getLocalStorage } from '../../utils/localStorage';
import { AddProgressComponent } from '../add-progress/add-progress.component';
@Component({
  selector: 'app-progress-manage',
  templateUrl: './progress-manage.component.html',
  styleUrls: ['./progress-manage.component.scss']
})
export class ProgressManageComponent implements OnInit {
  public userInfo;
  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.userInfo = getLocalStorage('userInfo');
  }

  openAddProgress() {
    let dialogRef = this.dialog.open(AddProgressComponent, {
      panelClass: 'add-progress-panel'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
         console.log(result)
      }
    });
  }
}
