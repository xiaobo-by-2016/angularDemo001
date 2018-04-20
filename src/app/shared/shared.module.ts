import {  NgModule } from '@angular/core';
import {  CommonModule } from '@angular/common';
import {  MatCardModule, 
          MatInputModule,
          MatButtonModule,
          MatIconModule,
          MatSidenavModule,
          MatToolbarModule,
          MatListModule} from '@angular/material';
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
    MatListModule
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
    MatListModule
  ]
})
export class SharedModule { }
