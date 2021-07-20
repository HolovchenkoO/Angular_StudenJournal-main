import {Injectable, Input, Output} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";
import {StudentJournalComponent} from "../../components/studensJournal/studentJournal.component";

@Injectable()
export class AuthService {

  @Input() isLoggedIn = false;
  constructor(private localStorageService: LocalStorageService) {

  }
}
