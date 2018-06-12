

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataTableModule} from "angular2-datatable"; 


import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainlandingComponent } from './mainlanding/mainlanding.component';
import { HeaderComponent } from './header/header.component';
import { ReceivesampleComponent } from './receivesample/receivesample.component';
import { AvailSampleComponent } from './avail-sample/avail-sample.component';
import { ApprovesampleComponent } from './approvesample/approvesample.component';
import { ListactivityComponent } from './listactivity/listactivity.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainlandingComponent,
    HeaderComponent,
    ReceivesampleComponent,
    AvailSampleComponent,
    ApprovesampleComponent,
    ListactivityComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
