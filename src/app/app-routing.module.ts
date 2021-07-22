import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentJournalComponent} from "./components/studensJournal/studentJournal.component";
import {AdminComponent} from "./modules/admin/admin.component";
import {ErrorComponent} from "./components/error/error.component";
import {AuthGuard} from "./shared/guards/auth.guards";
import {ViewStudentComponent} from "./components/viewStudent/viewStudent.component";

const routes: Routes = [
  {
    path: '', component: StudentJournalComponent
  } ,
  {
    path: 'admin', component: AdminComponent, canActivate:[AuthGuard]
  },
  {
    path: 'viewStudent', component: ViewStudentComponent
  },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       redirectTo: 'dashboard'
  //     },
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent
  //     }
  //   ]
  // },
  // {
  //   path: 'info/:id', component: InfoComponent
  // },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
