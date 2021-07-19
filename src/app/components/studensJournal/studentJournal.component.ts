import {Component, OnInit, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
import {StudentJournalService} from "./studentJournalService";
import {Observable, of} from "rxjs";
import {Student} from "./interfaces/student.interface";
import {AuthGuard} from "../../shared/guards/auth.guards";
import {AuthService} from "../../shared/services/auth.service";


function Import() {

}



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
//@Output() IsLoggedIn!: AuthService;
studentJournal$: Observable<Student[]> = of([]);

  constructor(private router: Router, private studentJournalService: StudentJournalService) {
  }
  onBtnClick() {
    // програмная навигация


   //this.IsLoggedIn.isLoggedIn = true;
    this.router.navigate(['/admin']);
  }

  ngOnInit(): void{
    this.studentJournal$ = this.studentJournalService.getAllStudents();
  }
}
