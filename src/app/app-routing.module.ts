import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', redirectTo: '/register', pathMatch: 'full' },
    { path: 'forget-password', redirectTo: '/forget-password', pathMatch: 'full' },
    { path: 'home', redirectTo: '/home', pathMatch: 'full' }
]
@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
