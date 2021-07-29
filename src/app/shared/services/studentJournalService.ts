import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

import {StudentsApiService} from "../../common/api/student-api.service";
import {Student} from "../../components/studensJournal/interfaces/student.interface";




@Injectable()
export class StudentJournalService {
  constructor(private studentsApiService: StudentsApiService) {
  }

  getAllStudents(): Observable<Student[]> {
    return this.studentsApiService.getAllStudents();
  }

  saveNewStudent(student: Student): void {
    this.studentsApiService.saveNewStudent(student);
  }

  getStudentById(id: number): Student {
    let student = this.studentsApiService.getStudentById(id);
    if(student != undefined) {
      return student;
    }
    else {
      return {id: 0, firstName: '', lastName: '', age: 0, group: ''};
    }
  }

  deleteStudentById(id: number): void {
    this.studentsApiService.deleteStudentById(id);
  }

  updateStudent(student: Student) {
    this.studentsApiService.updateStudent(student);
  }

  }

