import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

interface StudentApi {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  group: string;
}

@Injectable()
export class StudentsApiService {
  getAllStudents(): Observable<StudentApi[]> {
    return of([{
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
      age: 19,
      group: 'Group 2'
    }]);
  }
}
