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
          MatTableModule,
          MatFormFieldModule,
          MatSnackBarModule,
          MatDialogModule} from '@angular/material';
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class SharedModule { }
