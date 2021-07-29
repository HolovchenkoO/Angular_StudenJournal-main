import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StudentJournalService} from "./shared/services/studentJournalService";
import {AuthService} from "./shared/services/auth.service";
import {Student} from "./components/studensJournal/interfaces/student.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "./shared/services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'StudentJournal';
 // registerForm: Boolean;
 //  constructor(private router: Router, private authService: AuthService) {
 //  }

  onBtnClick() {
    // авторизация
    this.authService.isLoggedIn = true;

  }

  students: Student[] = [];
  registerForm!: FormGroup;
  logInForm!: FormGroup;
  isRegistered = true;
  // @ts-ignore
  student: Student;
  // @ts-ignore
  studentId: number;

  constructor(private localStorageService: LocalStorageService, private authService: AuthService,
              private studentService: StudentJournalService) {
    this.studentService.getAllStudents().subscribe(students => {
      this.students = students;
       })

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "firstName": new FormControl('', Validators.required),
      "lastName": new FormControl('', Validators.required),
      "age": new FormControl(17, [Validators.required, Validators.min(17), Validators.max(24)]),
      "group": new FormControl('', Validators.required),
      "course": new FormControl(1, [Validators.required, Validators.min(1), Validators.max(4)])
    });

    this.logInForm = new FormGroup({
      "firstName": new FormControl('', Validators.required),
      "lastName": new FormControl('', Validators.required),
    });
  }

  onBtnLogInClick() {
    this.isRegistered = true;
  }

  onBtnRegisterClick() {
    this.isRegistered = false;
  }

  onBtnLogInFormClick() {
    if (this.logInForm.valid) {
      const firstName = this.logInForm.get('firstName')?.value;
      const lastName = this.logInForm.get('lastName')?.value;

      if(!this.authService.authAdmin(firstName, lastName)) {
        let findStudent = this.students.find(s => s.firstName === firstName && s.lastName === lastName);
        if (findStudent != undefined) {
          this.studentId = findStudent.id;
          if (this.authService.authUser(lastName)) {
            alert(firstName + ', you are welcome!');
          } else {
            this.localStorageService.set(lastName, 'LoggedIn');
            if (this.authService.authUser(lastName)) {
              alert('Auth info has been saved');
            }
          }
        } else {
          alert('Student is not registered!');
        }
      }
      else {
        alert('Admin, you are welcome!');
      }

      this.logInForm.reset();
    }
  }

  onBtnCheckInFormClick() {
    if (this.registerForm.valid) {
      const firstName = this.registerForm.get('firstName')?.value;
      const lastName = this.registerForm.get('lastName')?.value;
      const age = this.registerForm.get('age')?.value;
      const group = this.registerForm.get('group')?.value;
      const course = this.registerForm.get('course')?.value;

      if(this.students.find(s => s.firstName === firstName && s.lastName === lastName) == undefined) {
        this.student = {
          id: this.students.length + 1,
          firstName: firstName,
          lastName: lastName,
          age: age,
          group: group
        };

        this.studentService.saveNewStudent(this.student);
        this.studentId = this.student.id;
        this.localStorageService.set(this.student.lastName, 'LoggedIn');

        if(this.authService.authUser(this.student.lastName)) {
          alert(this.student.firstName + ', you are welcome!');
        }
      }
      else {
        alert('Student is already registered!');
      }

      this.registerForm.reset();
    }
  }


}
