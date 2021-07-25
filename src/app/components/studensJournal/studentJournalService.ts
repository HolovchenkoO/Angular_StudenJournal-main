import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
//import {Student, StudentRawData} from "./interfaces/student.interface";
import {StudentsApiService} from "../../common/api/student-api.service";
import {Student} from "./interfaces/student.interface";
import {map, tap} from "rxjs/operators";
//import {group} from "@angular/animations";



@Injectable()
export class StudentJournalService {
  constructor(private studentsApiService: StudentsApiService) {
  }
student!:Student;
  getAllStudents(): Observable<Student[]> {
    return this.studentsApiService.getAllStudents();
  }

  getStudent(student: Student) {
   // let student: Student;
    return this.studentsApiService.getAllStudents().pipe(tap(()=>{
      student.id, student.firstName, student.lastName, student.age, student.group
    }  )) }
  //
  //   getAllStudents(): Observable<Student[]> {
  //     return of([{
  //       id: 1,
  //       firstName: 'FirstName 1',
  //       lastName: 'LastName 1',
  //       age: 21,
  //       group: 'Group 1'
  //     }, {
  //       id: 2,
  //       firstName: 'FirstName 2',
  //       lastName: 'LastName 2',
  //       age: 19,
  //       group: 'Group 1'
  //     }, {
  //       id: 3,
  //       firstName: 'FirstName 3',
  //       lastName: 'LastName 3',
  //       age: 19,
  //       group: 'Group 2'
  //     }]);
  //   }
  }

