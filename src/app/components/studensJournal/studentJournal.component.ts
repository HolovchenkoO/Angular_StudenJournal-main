import {Component, OnInit, Input, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StudentJournalService} from "../../shared/services/studentJournalService";
import {Observable, of} from "rxjs";
import {Student} from "./interfaces/student.interface";
import {AdminAuthGuard} from "../../shared/guards/admin-auth.guards";
import {AuthService} from "../../shared/services/auth.service";



@Component({
  selector: 'student',
  templateUrl: './studentJournal.component.html',
  styleUrls: ['./studentJournal.component.css']
})


export class StudentJournalComponent {

// @ts-ignore
  studentId!: number;
// @ts-ignore
  student: Student;

  constructor(private router: Router, private studentsService: StudentJournalService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.studentId = params.studentId;
      this.student = this.studentsService.getStudentById(this.studentId);
    })
  }

}
