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
          MatSelectModule,
          MatExpansionModule,
          MatTableModule,} from '@angular/material';
import { FormsModule,  ReactiveFormsModule }   from '@angular/forms';
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
    MatExpansionModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
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
    MatExpansionModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
