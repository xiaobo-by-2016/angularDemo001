import { Injectable } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
@Injectable()
export class CommonService {

  constructor() { }
  showLoading(){
    document.getElementById('load-container').style.display='block';
  }
  hideLoding(){
    document.getElementById('load-container').style.display='none';
  }
}
