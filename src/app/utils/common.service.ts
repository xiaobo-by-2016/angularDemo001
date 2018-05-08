import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef
} from '@angular/material';
import { SuccessComponent } from './toast-components/success/success.component';
import { WarnComponent } from './toast-components/warn/warn.component';
import { ErrorComponent } from './toast-components/error/error.component';
@Injectable()
export class CommonService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private snackBar: MatSnackBar,
  ) {

  }

  showLoading(message: string) {
    let element = document.getElementById('load-container');
    element.style.display = 'block';
    element.innerHTML = `<div class="loader">${message}</div>`
  }
  hideLoding() {
    document.getElementById('load-container').style.display = 'none';
  }
  MatSnackBarVerticalPosition

  toastSuccess(message: string, time?: number, vp?: MatSnackBarVerticalPosition, hp?: MatSnackBarHorizontalPosition) {
    this.snackBar.openFromComponent(SuccessComponent, {
      duration: time || 2000,
      verticalPosition: vp || this.verticalPosition,
      horizontalPosition: hp || this.horizontalPosition,
      data: message,
      panelClass:'toast-success-container'
    })
  }

  toastError(message: string, time?: number, vp?: MatSnackBarVerticalPosition, hp?: MatSnackBarHorizontalPosition) {
    this.snackBar.openFromComponent(ErrorComponent, {
      duration: time || 2000,
      verticalPosition: vp || this.verticalPosition,
      horizontalPosition: hp || this.horizontalPosition,
      data: message,
      panelClass:'toast-error-container'
    })
  }

  toastWarn(message: string, time?: number, vp?: MatSnackBarVerticalPosition, hp?: MatSnackBarHorizontalPosition) {
    this.snackBar.openFromComponent(WarnComponent, {
      duration: time || 2000,
      verticalPosition: vp || this.verticalPosition,
      horizontalPosition: hp || this.horizontalPosition,
      data: message,
      panelClass:'toast-warn-container'
    })
  }
}
