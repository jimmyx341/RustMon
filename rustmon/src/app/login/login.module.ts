import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
