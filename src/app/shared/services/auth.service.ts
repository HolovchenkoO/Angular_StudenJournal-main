import {Injectable, Input, Output} from "@angular/core";
import {LocalStorageService} from "./local-storage.service";

@Injectable()
export class AuthService {
  @Input() isLoggedIn = false;
  constructor(private localStorageService: LocalStorageService) {
  }
}
