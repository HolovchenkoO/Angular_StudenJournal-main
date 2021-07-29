import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Student} from "../../components/studensJournal/interfaces/student.interface";
import {Observable, of} from "rxjs";
import {LocalStorageService} from "../../shared/services/local-storage.service";
import {StudentJournalService} from "../../shared/services/studentJournalService";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  students$: Observable<Student[]> = of([]);
  update: boolean = false;

  // @ts-ignore
  updateStudent: Student;
  updateForm!: FormGroup;

  constructor(private router: Router,
              private studentsService: StudentJournalService,
              private localStorageService: LocalStorageService) {
    this.students$ = this.studentsService.getAllStudents();
  }

  ngOnInit(): void {
  }

  onBtnDelClick(event: any) {
    let id = event.path[0].attributes[1].value;
    event.path[3].remove();
    let studentTmp = this.studentsService.getStudentById(id);
    this.studentsService.deleteStudentById(id);
    this.localStorageService.delete(studentTmp.lastName);
  }

  onBtnUpdateClick(event: any) {
    if(this.update == false) {
      let id = event.path[0].attributes[1].value;
      this.updateStudent = this.studentsService.getStudentById(id);

      this.updateForm = new FormGroup({
        "firstName": new FormControl(this.updateStudent.firstName, Validators.required),
        "lastName": new FormControl(this.updateStudent.lastName, Validators.required),
        "age": new FormControl(this.updateStudent.age, [Validators.required, Validators.min(17), Validators.max(24)]),
        "group": new FormControl(this.updateStudent.group, Validators.required)
         });
      this.update = true;
    }
    else {
      this.update = false
    }
  }

  onBtnUpdateFormClick() {
    if (this.updateForm.valid) {
      const firstName = this.updateForm.get('firstName')?.value;
      const lastName = this.updateForm.get('lastName')?.value;
      const age = this.updateForm.get('age')?.value;
      const group = this.updateForm.get('group')?.value;

      this.updateStudent.firstName = firstName;
      this.updateStudent.lastName = lastName;
      this.updateStudent.age = age;
      this.updateStudent.group = group;

      this.studentsService.updateStudent(this.updateStudent);
    }
  }



}
