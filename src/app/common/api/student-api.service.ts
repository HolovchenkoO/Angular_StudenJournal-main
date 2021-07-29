import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {LocalStorageService} from "../../shared/services/local-storage.service";

interface StudentApi {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  group: string;
}

@Injectable()
export class StudentsApiService {

  students: StudentApi[] = [];
  indexes: number[] = [];

  constructor(private localStorageService: LocalStorageService) {
  }

  getAllStudents(): Observable<StudentApi[]> {

    this.students = [{
      id: 1,
      firstName: 'FirstName 1',
      lastName: 'LastName 1',
      age: 21,
      group: 'Group 1'
    }, {
      id: 2,
      firstName: 'FirstName 2',
      lastName: 'LastName 2',
      age: 19,
      group: 'Group 1'
    }, {
      id: 3,
      firstName: 'FirstName 3',
      lastName: 'LastName 3',
      age: 23,
      group: 'Group 2'
    },]
    this.getStudentsFromLS();

    return of(this.students);
  }

  getStudentsFromLS() {
    let obj = this.localStorageService.get('indexes');
    if(obj != '') {
      this.indexes = JSON.parse(obj);
    }

    if(this.indexes.length != 0) {
      for (let id of this.indexes) {
        let student = this.localStorageService.get(id.toString());

        if (student != '') {
          this.students.push(JSON.parse(student));
        }
      }
    }
  }

    saveNewStudent(student: StudentApi):void {
      this.students.push(student);
      this.indexes.push(student.id);

      this.localStorageService.set(student.id.toString(), student);
      this.localStorageService.set('indexes', this.indexes);
    }

  getStudentById(id: number): StudentApi | undefined {
    return this.students.find(s => s.id == id);
  }

  deleteStudentById(id: number): void {
    let rSId = this.students.findIndex(it => it.id == id);
    this.students.splice(rSId, 1);

    if(id > 3) {
      let rId = this.indexes.findIndex(it => it == id);
      this.indexes.splice(rId, 1);
    }

    this.localStorageService.delete(id.toString());
    this.localStorageService.set('indexes', this.indexes);
  }

  updateStudent(student: StudentApi) {
    let obj = this.localStorageService.get(student.id.toString());

    if(obj != '') {
      this.localStorageService.delete(student.id.toString());
      this.localStorageService.set(student.id.toString(), student);
    }

    let idx = this.students.findIndex(s => s.id == student.id);
    this.students.splice(idx, 1);
    this.students.push(student);
  }



}
