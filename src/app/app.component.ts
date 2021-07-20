import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {StudentJournalService} from "./components/studensJournal/studentJournalService";
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentJournal';
  constructor(private router: Router, private authService: AuthService) {
  }

  onBtnClick() {
    // авторизация
    this.authService.isLoggedIn = true;

  }

}
