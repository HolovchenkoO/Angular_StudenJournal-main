import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminComponent} from "./admin.component";
//import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../../shared/guards/auth.guards";

@NgModule({
  declarations: [
    AdminComponent
   // DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [AdminComponent],
  providers: [],
})
export class AdminModule { }
