import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Users/list/list.component';
import { AddComponent } from './Users/add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpHelper } from './helper/httpHelper';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatGridListModule} from '@angular/material/grid-list';
const routes:Routes = [
  {path:'list', component:ListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatListModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [HttpHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
