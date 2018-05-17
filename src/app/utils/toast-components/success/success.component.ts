import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
@Component({
  selector: 'app-succsss-component',
  templateUrl: 'success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public message
  ) {

  }
  ngOnInit() {
  }
}
