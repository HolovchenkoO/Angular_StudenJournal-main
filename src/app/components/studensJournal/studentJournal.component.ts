import {Component, OnInit, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {StudentJournalService} from "./studentJournalService";
import {Observable, of} from "rxjs";
import {Student} from "./interfaces/student.interface";
import {AuthGuard} from "../../shared/guards/auth.guards";
import {AuthService} from "../../shared/services/auth.service";



@Component({
  selector: 'studentJournal',
  templateUrl: './studentJournal.component.html',
  styleUrls: ['./studentJournal.component.css']
})
// export class StudentJournalComponent implements OnInit {
//   students$: Observable<Student[]> = of([]);
//
//   constructor(private router: Router, private studentJournalService: StudentJournalService) {
//   }
//   onBtnClick() {
//     // програмная навигация
//     this.router.navigate(['/admin']);
//   }
//
//   ngOnInit(): void {
//     this.students$ = this.studentJournalService.getAllStudents();
//   }
//
//
//
// }

export class StudentJournalComponent implements OnInit {
//@Output() IsLoggedIn: boolean = true;
studentJournal$: Observable<Student[]> = of([]);
// public static IsLoggedIn: boolean = false;


  constructor(private router: Router, private studentJournalService: StudentJournalService) {
  }
  onViewBtnClick() {
    // програмная навигация
    this.router.navigate(['/viewStudent']);
  }
  onEditBtnClick() {
    // програмная навигация
    this.router.navigate(['/admin']);
  }
  onDeleteBtnClick() {
    // програмная навигация
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void{

    this.studentJournal$ = this.studentJournalService.getAllStudents();
  }
}
