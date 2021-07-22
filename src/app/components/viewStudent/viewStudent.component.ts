import {Component, OnInit, Input, Output} from '@angular/core';
import {Router} from "@angular/router";
//import {StudentJournalService} from "./studentJournalService";
import {Observable, of} from "rxjs";
//import {Student} from "./interfaces/student.interface";
import {AuthGuard} from "../../shared/guards/auth.guards";
import {AuthService} from "../../shared/services/auth.service";



@Component({
  selector: 'viewStudent',
  templateUrl: './viewStudent.component.html',
  styleUrls: ['./viewStudent.component.css']
})

export class ViewStudentComponent implements OnInit {

  ngOnInit(): void{


  }

}
