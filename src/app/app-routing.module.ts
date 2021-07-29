import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentJournalComponent} from "./components/studensJournal/studentJournal.component";
import {AdminComponent} from "./modules/admin/admin.component";
import {ErrorComponent} from "./components/error/error.component";
import {AdminAuthGuard} from "./shared/guards/admin-auth.guards";
import {StudentAuthGuard} from "./shared/guards/student-auth.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: 'admin',
    canActivate: [AdminAuthGuard],
    component: AdminComponent
  },
  {
    path: 'student/:studentId',
    canActivate: [StudentAuthGuard],
    component: StudentJournalComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
