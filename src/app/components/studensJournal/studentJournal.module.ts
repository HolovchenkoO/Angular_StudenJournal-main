import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {StudentJournalComponent} from "./studentJournal.component";


@NgModule({
  declarations: [
    StudentJournalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class StudentJournalModule { }
