import {Component, OnInit, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
//import {Student} from "./interfaces/student.interface";
import {AuthGuard} from "../../shared/guards/auth.guards";
import {AuthService} from "../../shared/services/auth.service";
import {Student} from "../studensJournal/interfaces/student.interface";
import {StudentJournalService} from "../studensJournal/studentJournalService";
import {map} from "rxjs/operators";



@Component({
  selector: 'viewStudent',
  templateUrl: './viewStudent.component.html',
  styleUrls: ['./viewStudent.component.css']
})

export class ViewStudentComponent implements OnInit {
  studentJournal$!: Observable<Student[]> ;
  studentJournal1$!: Observable<Student[]> ;
  @Input() student: Student = {
          id: 1,
          firstName: 'FirstName 1',
          lastName: 'LastName 1',
          age: 21,
          group: 'Group 1'
  };
  @Input() idStudent!: number;

  constructor(private router: Router, private studentJournalService: StudentJournalService) {
  }

  ngOnInit(): void {
    this.studentJournal$ = this.studentJournalService.getAllStudents();
    this.studentJournal1$ = this.studentJournalService.getStudent( this.student);
    this.studentJournalService.getStudent( this.student);
   // this.studentJournal$ = this.studentJournalService.getAllStudents().pipe(map(student=>student.id == this.idStudent));
    this.idStudent = this.idStudent;
  }
}
