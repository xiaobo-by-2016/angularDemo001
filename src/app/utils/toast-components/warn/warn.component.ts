import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
@Component({
  selector: 'app-warn',
  templateUrl: './warn.component.html',
  styleUrls: ['./warn.component.scss']
})
export class WarnComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) private message
  ) {
  }

  ngOnInit() {
  }

}
