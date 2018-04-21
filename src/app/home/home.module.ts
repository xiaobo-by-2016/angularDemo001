import { SharedModule } from './../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { SettingComponent } from './setting/setting.component';
import { TopicManageComponent } from './topic-manage/topic-manage.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { ProgressManageComponent } from './progress-manage/progress-manage.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent, 
    HeaderComponent, 
    SideMenuComponent, 
    AccountInfoComponent, SettingComponent, TopicManageComponent, TopicSelectComponent, StudentProgressComponent, ProgressManageComponent]
})
export class HomeModule { 
    
}
