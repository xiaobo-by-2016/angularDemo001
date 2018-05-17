import { AnnComponent } from './ann/ann.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountInfoComponent } from './account-info/account-info.component';
import { SettingComponent } from './setting/setting.component';
import { TopicSelectComponent } from './topic-select/topic-select.component';
import { TopicManageComponent } from './topic-manage/topic-manage.component';
import { StudentProgressComponent } from './student-progress/student-progress.component';
import { ProgressManageComponent } from './progress-manage/progress-manage.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent ,children:[
        {path:'account-info',component:AccountInfoComponent},
        {path:'account-info1',component:AccountInfoComponent},
        {path:'setting',component:SettingComponent},
        {path:'topic-select',component:TopicSelectComponent},
        {path:'topic-manage',component:TopicManageComponent},
        {path:'student-progress',component:StudentProgressComponent},
        {path:'progress-manage',component:ProgressManageComponent},
        {path:'ann',component:AnnComponent}
    ]}
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
