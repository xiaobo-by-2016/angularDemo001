import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { WarnComponent } from './warn/warn.component';

@NgModule({
    imports: [
        CommonModule,

    ],
    declarations: [
        SuccessComponent,
        ErrorComponent,
        WarnComponent,
        
    ],
    entryComponents: [
        SuccessComponent,
        ErrorComponent,
        WarnComponent,
    ]
})
export class ToastComponentsModule {
    constructor() { }

}
