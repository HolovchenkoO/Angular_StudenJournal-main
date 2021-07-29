import {Injectable, Input, Output} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class AuthService {
  isStudentLoggedIn = false;
  isAdminLoggedIn = false;
  @Input() isLoggedIn = false;
  constructor(private localStorageService: LocalStorageService) {
  }

  authUser(lastName: string): boolean {
    if(this.localStorageService.get(lastName) == 'LoggedIn') {
      this.isStudentLoggedIn = true;
      return true;
    }
    else {
      return false;
    }
  }

  authAdmin(firstName: string, lastName: string): boolean {
    if(firstName == 'admin' && lastName == 'admin') {
      this.isAdminLoggedIn = true;
      return true;
    }
    else {
      return false;
    }
  }
}
