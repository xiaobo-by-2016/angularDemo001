import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  declarations: []
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('模块已经存在,不能再次加载!!!');
    }
  }
}
