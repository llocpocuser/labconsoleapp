import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { MainlandingComponent } from './mainlanding/mainlanding.component';
import { ReceivesampleComponent } from './receivesample/receivesample.component';
import { AvailSampleComponent } from './avail-sample/avail-sample.component';
import { ApprovesampleComponent } from './approvesample/approvesample.component';
import { ListactivityComponent } from './listactivity/listactivity.component';

export const AppRoutes:Routes = [
    {
        path: "",
        component: LoginComponent
     },
     {
       path: "login",
       component: LoginComponent
     },
     {
      path: "mainlanding",
      component: MainlandingComponent
     },
     {
      path: "receivesample",
      component: ReceivesampleComponent
     },
     {
      path: "availsample",
      component: AvailSampleComponent
     },
     {
      path: "approvesample",
      component: ApprovesampleComponent
     },
     {
      path: "listactivity",
      component: ListactivityComponent
     }

     
];