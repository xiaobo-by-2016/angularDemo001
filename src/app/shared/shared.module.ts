import {  NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {  MatCardModule, 
          MatInputModule,
          MatButtonModule,
          MatIconModule,
          MatSidenavModule,
          MatToolbarModule,
          MatListModule,
          MatTabsModule,
          MatRadioModule,
          MatSelectModule,} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
  ],
  declarations: [],
  exports:[
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatListModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
  ]
})
export class SharedModule { }
